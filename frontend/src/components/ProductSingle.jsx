// // import React, { useContext, useEffect, useState } from 'react';

// // import { useParams } from 'react-router-dom';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';
// // import { ShopContext } from '../context/ShopContext';
// // import ProductSize from '../components/ProductSize';
// // import ImageSingleProduct from '../components/ImageSingleProduct';

// // const ProductSingle = () => {
// //     const { productId } = useParams();
// //     const { productsData, currency, addToCart, cartItems, setCartItems } = useContext(ShopContext);
// //     const [singleproductData, setSingleproductData] = useState(false);
// //     const [loading, setLoading] = useState(true);
// //     const [counters, setCounters] = useState([]);

// //     useEffect(() => {
// //         const fetchSingleProductData = () => {
// //             if (!productsData) {
// //                 console.error('No products data available');
// //                 setLoading(false);
// //                 return;
// //             }
// //             const product = productsData.find(item => item.id === Number(productId));
// //             console.log('Found product:', product); // Debug: Log found product

// //             setSingleproductData(product);
// //             setLoading(false);
// //         };

// //         setLoading(true);
// //         fetchSingleProductData();
// //     }, [productId, productsData]);

// //     const handleSubmit = (values) => {
// //         const newItem = {
// //             productId: singleproductData.id,
// //             productName: singleproductData.name,
// //             productCode: singleproductData.productcode,
// //             productImage: singleproductData.images[0],
// //             sizes: values.counters,
// //             price: singleproductData.price,
// //             color: values.colorSelected,
// //             printfinish: values.printFinish,
// //             logoposition: values.logoPosition,
// //         };

// //         addToCart({ [singleproductData.id]: newItem });
// //         setCartItems({ [singleproductData.id]: newItem });

// //         // Resetting the form values after submission
// //         values.counters = [];
// //         values.colorSelected = [];
// //         values.printFinish = '';
// //         values.logoPosition = '';
// //     };

// //     const initialValues = {
// //         counters: counters,
// //         colorSelected: [],
// //         printFinish: '',
// //         logoPosition: '',
// //     };

// //     const validationSchema = Yup.object().shape({
// //         counters: Yup.array().of(
// //             Yup.object().shape({
// //                 size: Yup.string().required('Size is required'),
// //                 count: Yup.number().min(0, 'Count must be at least 0').required('Count is required'),
// //             })
// //         ),
// //         // counters: Yup.array().min(1, 'At least one size/quantity is required.'),
// //         colorSelected: Yup.array().min(1, 'At least one color is required.'),
// //         printFinish: Yup.string().required('Print finish is required.'),
// //         logoPosition: Yup.string().required('Logo position is required.'),
// //     });


// //     const handleSizeClick = (index, size) => {
// //         formik.setFieldValue('counters', prevCounters => {
// //             const newCounters = [...prevCounters];
// //             const sizeIndex = newCounters.findIndex(counter => counter?.size === size);

// //             if (sizeIndex > -1) {
// //                 // Size already exists, update the count
// //                 newCounters[sizeIndex].count = (newCounters[sizeIndex].count || 0) + 1;
// //             } else {
// //                 // Size doesn't exist, add new entry
// //                 newCounters.push({ size, count: 1 });
// //             }

// //             return newCounters;
// //         });
// //         console.log(index, size);
// //     };

// //     return (
// //         <section className='single-product m-10'>
// //             <div className='container mx-auto px-4'>
// //                 <div className='grid grid-cols-12'>
// //                     <div className='md:col-span-6 col-span-12'>
// //                         <ImageSingleProduct images={singleproductData?.images} />
// //                     </div>

// //                     <div className='md:col-span-6 col-span-12'>
// //                         <h3 className='title mb-2'>{singleproductData?.name}</h3>
// //                         <p className='text-tiny-normal product-code mb-2'>Product Code: {singleproductData?.productcode}</p>
// //                         <h3 className='price pt-2 pb-2'>{currency}{singleproductData?.price}</h3>

// //                         <Formik
// //                             initialValues={initialValues}
// //                             validationSchema={validationSchema}
// //                             onSubmit={handleSubmit}
// //                         >
// //                             {({ values, setFieldValue, errors, touched }) => (
// //                                 <Form>
// //                                     <div className='accordion-1 pb-5 pt-5'>
// //                                         <ProductSize
// //                                             singleproductData={singleproductData}
// //                                             counters={values.counters}
// //                                             setCounters={handleSizeClick}
// //                                             // setCounters={(counters) => setFieldValue('counters', counters)}
// //                                         />
// //                                         {errors.counters && touched.counters && <div className="error">{errors.counters}</div>}
// //                                     </div>

// //                                     <div className='accordion-2 pb-5 pt-5'>
// //                                         <div className='flex gap-1'>
// //                                             {singleproductData?.color?.map((color, i) => (
// //                                                 <div key={i} className='relative'>
// //                                                     <Field
// //                                                         type="checkbox"
// //                                                         id={`colorPicker-${i}`}
// //                                                         name="colorSelected"
// //                                                         value={color}
// //                                                         checked={values.colorSelected.includes(color)}
// //                                                         onChange={() => {
// //                                                             const selectedColors = values.colorSelected.includes(color)
// //                                                                 ? values.colorSelected.filter(c => c !== color)
// //                                                                 : [...values.colorSelected, color];
// //                                                             setFieldValue('colorSelected', selectedColors);
// //                                                         }}
// //                                                     />
// //                                                     <label
// //                                                         className={`px-3 rounded border-2 ${values.colorSelected.includes(color) ? 'border-green-800' : 'border-gray-900'}`}
// //                                                         htmlFor={`colorPicker-${i}`}
// //                                                         style={{ backgroundColor: color }}
// //                                                     />
// //                                                 </div>
// //                                             ))}
// //                                         </div>
// //                                         {errors.colorSelected && touched.colorSelected && <div className="error">{errors.colorSelected}</div>}
// //                                     </div>

// //                                     <div className='accordion-3 pb-5 pt-5'>
// //                                         <div>
// //                                             <button type="button" onClick={() => setFieldValue('printFinish', 'viewproduct')} className={`green-border-button ${values.printFinish === 'viewproduct' ? 'active-button' : ''}`}>
// //                                                 View Product
// //                                             </button>
// //                                             <button type="button" onClick={() => setFieldValue('printFinish', 'Embroidery')} className={`green-border-button ${values.printFinish === 'Embroidery' ? 'active-button' : ''}`}>
// //                                                 Embroidery
// //                                             </button>
// //                                         </div>
// //                                         {errors.printFinish && touched.printFinish && <div className="error">{errors.printFinish}</div>}
// //                                     </div>

// //                                     <div className='accordion-4 pb-5 pt-5'>
// //                                         <div>
// //                                             <button type="button" onClick={() => setFieldValue('logoPosition', 'Right Chest')} className={`green-border-button ${values.logoPosition === 'Right Chest' ? 'active-button' : ''}`}>
// //                                                 Right Chest
// //                                             </button>
// //                                             <button type="button" onClick={() => setFieldValue('logoPosition', 'Left Chest')} className={`green-border-button ${values.logoPosition === 'Left Chest' ? 'active-button' : ''}`}>
// //                                                 Left Chest
// //                                             </button>
// //                                             <button type="button" onClick={() => setFieldValue('logoPosition', 'Right Sleeve')} className={`green-border-button ${values.logoPosition === 'Right Sleeve' ? 'active-button' : ''}`}>
// //                                                 Right Sleeve
// //                                             </button>
// //                                             <button type="button" onClick={() => setFieldValue('logoPosition', 'Left Sleeve')} className={`green-border-button ${values.logoPosition === 'Left Sleeve' ? 'active-button' : ''}`}>
// //                                                 Left Sleeve
// //                                             </button>
// //                                             <button type="button" onClick={() => setFieldValue('logoPosition', 'Back')} className={`green-border-button ${values.logoPosition === 'Back' ? 'active-button' : ''}`}>
// //                                                 Back
// //                                             </button>
// //                                         </div>
// //                                         {errors.logoPosition && touched.logoPosition && <div className="error">{errors.logoPosition}</div>}
// //                                     </div>

// //                                     <div>
// //                                         <button type="submit" className="green-border-button">Add to Basket</button>
// //                                     </div>
// //                                 </Form>
// //                             )}
// //                         </Formik>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }

// // export default ProductSingle;'
// import React, { useContext, useEffect, useState } from 'react';

// import { useFormik } from 'formik';
// import ProductSize from '../components/ProductSize';
// import { ShopContext } from '../context/ShopContext';
// import { useParams } from 'react-router-dom';

// const ProductSingle = () => {

//     const { productId } = useParams();
//     const { productsData, currency, addToCart, cartItems, setCartItems } = useContext(ShopContext);
//     const [singleproductData, setSingleproductData] = useState(false);
//     const formik = useFormik({
//         initialValues: {
//             counters: []
//         },
//         onSubmit: values => {
//             // handle form submission
//             console.log(values);
//         }
//     });

//     const handleSizeClick = (index, size) => {
//         formik.setFieldValue('counters', prevCounters => {
//             const newCounters = [...prevCounters];
//             const sizeIndex = newCounters.findIndex(counter => counter?.size === size);

//             if (sizeIndex > -1) {
//                 // Size already exists, update the count
//                 newCounters[sizeIndex].count = (newCounters[sizeIndex].count || 0) + 1;
//             } else {
//                 // Size doesn't exist, add new entry
//                 newCounters.push({ size, count: 1 });
//             }

//             return newCounters;
//         });
//         console.log(index, size);
//     };

//     return (
//         <ProductSize
//             singleproductData={singleproductData}
//             counters={formik.values.counters}
//             setCounters={handleSizeClick}
//         />
//     );
// };

// export default ProductSingle;

