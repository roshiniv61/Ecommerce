import React, { useState, useContext, useEffect } from 'react'
import products from '../data/products';
import { ShopContext } from '../context/ShopContext';
import Products from '../components/Products';
import PriceFilter from '../components/PriceFilter';
//  import ReactSlider from 'react-slider';



const Collection = () => {

  // accordions
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1)
  }
  const handleClick2 = () => {
    setOpen2(!open2)
  }
  const handleClick3 = () => {
    setOpen3(!open3)
  }
  // accordions end

  const { productsData ,search} = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [gender, setGender] = useState([]);
  const [brand, setBrand] = useState([]);
  const [colorSelected, setColorSelected] = useState([]);
  const [sortType, setSortType] = useState('relavent')


  const toggleCategory = (e) => {
    if (gender.includes(e.target.value)) {
      setGender(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setGender(prev => [...prev, e.target.value])
    }
  }

  const toggleBrand = (e) => {
    if (brand.includes(e.target.value)) {
      setBrand(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setBrand(prev => [...prev, e.target.value])
    }
  }

  const toggleColor = (e) => {
    if (colorSelected.includes(e.target.value)) {
      setColorSelected(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setColorSelected(prev => [...prev, e.target.value])
    }
  }




  const applyFilter = () => {
    let productsCopy = productsData.slice();

    if(search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }


    if (gender.length > 0) {
      productsCopy = productsCopy.filter(item => gender.includes(item.gender));
    }
    if (brand.length > 0) {
      productsCopy = productsCopy.filter(item => brand.includes(item.brand));
    }
    if (colorSelected.length > 0) {
      productsCopy = productsCopy.filter(product =>
        product.color.some(productColor => colorSelected.includes(productColor))
      );
    }
    setFilteredProducts(productsCopy);
    console.log(productsCopy)

  }

  const sortProduct = () => {
    let fpCopy = filteredProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilteredProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilteredProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(() => {
    applyFilter();
  }, [gender, brand, colorSelected,search]);

  useEffect(() => {
    sortProduct()
  }, [sortType])

  // color accordions data
  const [uniqueColors, setUniqueColors] = useState(new Set());

  useEffect(() => {
    const colorsSet = new Set();
    productsData.forEach(product => {
      product.color.forEach(color => colorsSet.add(color));
    });
    setUniqueColors(colorsSet);
  }, [productsData]);

  // price


  const handlePriceChange = (min, max) => {
    const filtered = filteredProducts.filter(product =>
      product.price >= min && product.price <= max
    );
    setFilteredProducts(filtered);
  };



// search function- 2:46:50 time on video
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='w-[70%] text-end '>
          <h2>Collections</h2>
        </div>
        <div className=' m-5'>
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-200 text-md p-3'>
            <option value="relavent"> Sort by : Relavent </option>
            <option value="low-high"> Sort by : low to high </option>
            <option value="high-low"> Sort by : high to low </option>
          </select>

        </div>

      </div>
      <div className='md:flex gap-5 '>

        <section className='side-bar md:w-1/4'>
          <div className='container mx-auto px-4'>
            <div>
              <div className='flex justify-between gap-5 my-5'>
                <p className='text-regular-bold'>Filter</p>
                <p className='text-tiny-normal'>clear all</p>
              </div>

              <div className='accordion-1'>
                <div className='flex justify-between accordion-head mb-3'
                  onClick={() => handleClick1()}>
                  <p>Gender</p>
                  <p><b>+</b></p>
                </div>
                {open1 &&
                  <div className='accrdion-body'>
                    <p className='flex gap-3 p-2 bg-gray-200 rounded-md mb-2'>
                      <input className='' type="checkbox" value="male" onChange={toggleCategory} />Male</p>
                    <p className='flex gap-3 p-2 bg-gray-200 rounded-md mb-2'>
                      <input className='' type="checkbox" value="female" onChange={toggleCategory} />Female</p>
                    <p className='flex gap-3 p-2 bg-gray-200 rounded-md mb-2'>
                      <input className='' type="checkbox" value="unisex" onChange={toggleCategory} />Unisex</p>
                  </div>
                }
              </div>

              <PriceFilter onPriceChange={handlePriceChange} />


              <div className='accordion-2'>
                <div className='flex justify-between accordion-head mb-3' onClick={() => handleClick2()}>
                  <p>Color</p>
                  <p><b>+</b></p>
                </div>
                {open2 &&
                  <div className='accrdion-body'>
                    <div className='flex gap-1'>
                      {[...uniqueColors].map((color, i) => (
                        <div key={i}>
                          <input
                            type="checkbox"
                            id={`colorPicker-${i}`}
                            value={color}
                            checked={colorSelected.includes(color)}
                            onChange={toggleColor}
                            style={{ marginRight: '8px' }}
                            hidden
                          />

                          <label
                            className={`px-3 rounded border-2  ${`${colorSelected}` ? `border-green-800` : "border-gray-900"}`}
                            htmlFor={`colorPicker-${i}`}
                            style={{ backgroundColor: color, }}
                          >
                            {/* The label is used for selecting colors, no text is displayed */}
                          </label>
                        </div>
                      ))}


                    </div>
                  </div>
                }
              </div>

              <div className='accordion-3'>
                <div className='flex justify-between accordion-head mb-3' onClick={() => handleClick3()}>
                  <p>Brand</p>
                  <p><b>+</b></p>
                </div>
                {open3 &&
                  <div className='accrdion-body'>
                    <div className='p-2 bg-gray-200 rounded-md mb-2'>
                      <p className='flex gap-3'><input type="checkbox" value="puma" onChange={toggleBrand} />Puma</p>
                      <p className='flex gap-3'><input type="checkbox" value="nike" onChange={toggleBrand} />Nike</p>
                      <p className='flex gap-3'> <input type="checkbox" value="adidas" onChange={toggleBrand} />Adidas</p>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </section>



        <section className='products-cards'>
          <div className='container mx-auto px-4'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
              {filteredProducts?.map((product, i) => {
                return (
                  <Products product={product} key={i} />
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Collection

