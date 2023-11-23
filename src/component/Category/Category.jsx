import style from './Category.module.css';
import main from '../../assets/Category/main.png';
import bags from '../../assets/Category/bags.jpg';
import barfan from '../../assets/Category/barfan.jpg';
import candles from '../../assets/Category/candles.jpg';
import discount from '../../assets/Category/discount.png';
import jweelry from '../../assets/Category/jweelry.jpg';
import skin_care from '../../assets/Category/skin_care.jpg';
import oil from '../../assets/Category/oil.jpg';
import Makeup from '../../assets/Category/Makeup.jpg';
import hip from '../../assets/Category/hip.jpg';

function Category() {
  const categories = [
    {
      src: main,
      name: 'main',
    },
    {
      src: barfan,
      name: 'barfan',
    },
    {
      src: bags,
      name: 'bags',
    },
    {
      src: candles,
      name: 'candles',
    },
    {
      src: oil,
      name: 'oil',
    },
    {
      src: Makeup,
      name: 'makeup',
    },
    {
      src: skin_care,
      name: 'skin care',
    },
    {
      src: jweelry,
      name: 'jweelry',
    },
    {
      src: discount,
      name: 'discount',
    },
    {
      src: hip,
      name: 'hip',
    },
  ];

  return (
    <>
        <div className={style.container} >
          {/* <div className={style.categoryCon}> */}

      {categories.map((cat, index) => (
          <div className={style.box_container} key={index}>
            <div className={style.box_img}>
              {/* <div className={style.image}> */}
                <img src={cat.src} alt={cat.name} />
              {/* </div> */}
              <div>
                <abbr title={cat.name} className={style.categoryName}>
                  {cat.name}
                </abbr>
              </div>
            </div>
          </div>
      ))}
          </div>
      {/* </div> */}
    </>
  );
}

export default Category;
