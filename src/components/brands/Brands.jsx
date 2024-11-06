import './brands.css';


import brands from "../../shared/assets/brands.png"
const Brands = () => {
    
    const brandsArray = [brands, brands, brands, brands];

    return (
        <div className='brands'>
            <h2 className="title_h2">наши бренды</h2>
            <div className="line"></div>
            <div className="brands_img">
                {brandsArray.map((brand, index) => (
                    <img key={index} src={brand} alt={`brand-${index}`} />
                ))}
            </div>
        </div>
    );
}

export default Brands;
