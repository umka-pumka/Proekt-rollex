import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFavorites } from "../../app/redux/slices/favoritesSlice";
import "./favorites.css";
import { toast } from "react-toastify";
import Card from '../../widgets/card/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items);
    const [sliderSettings, setSliderSettings] = useState(null);


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
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            });
        } else if (window.innerWidth < 1024) {
            setSliderSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            });
        } else {
            setSliderSettings(null);
        }
    };


    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClearFavorites = () => {
        dispatch(clearFavorites());
        toast.info("Все товары удалены из избранного");
    };

    return (
        <div className="favorites">
            <h2>Избранное</h2>
            {favorites.length === 0 ? (
                <p>Избранное пусто</p>
            ) : (
                <div>
                    <button onClick={handleClearFavorites}>Очистить избранное</button>
                    <div className="generalCard">
                        {sliderSettings ? (
                            <Slider {...sliderSettings}>
                                {favorites.map((post) => (
                                    <Card key={post.id} post={post} />
                                ))}
                            </Slider>
                        ) : (
                            <div className="cardList">
                                {favorites.map((post) => (
                                    <Card key={post.id} post={post} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Favorites;
