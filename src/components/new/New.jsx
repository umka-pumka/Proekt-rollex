import { useEffect, useState } from "react";

import service from '../../api/service';
import Card from '../../widgets/card/Card';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./new.css";

const New = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sliderSettings, setSliderSettings] = useState(null);

  const fetchPosts = async () => {
    try {
      const data = await service.getAllProducts();
      setPosts(data.slice(0, 8));
    } catch (err) {
      setError("Не удалось загрузить посты");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();

    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSliderSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        });
      } else if (window.innerWidth < 768) {
        setSliderSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        });
      } else if (window.innerWidth < 1024) {
        setSliderSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        });
      } else {
        setSliderSettings(null);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="new">
        <h2 className="title_h2">Новые поступления</h2>
        <div className="line"></div>
        <div className="generalCard">
          {sliderSettings ? (
            <Slider {...sliderSettings}>
              {posts.map((post) => (
                <Card key={post.id} post={post} />
              ))}
            </Slider>
          ) : (
            <div className="cardList">
              {posts.map((post) => (
                <Card key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default New;
