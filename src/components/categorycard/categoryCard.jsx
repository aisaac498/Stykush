import React from 'react';
import '../../styles/categoryCard.css';
import { Link } from 'react-router-dom';

function CategoryCard() {
    return (
        <div className='category-container'>
            <h3>SHOP BY CATEGORY</h3>
            <div className='row'>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                    <Link to='products/paper'>
                        <img src="https://unsplash.com/photos/Oz_J_FXKvIs/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8Y2FsbGlncmFwaHklMjBwYXBlcnxlbnwwfHx8fDE3MTg5NzE1OTF8MA&force=true&w=1920" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Calligraphy Paper</h4>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                    <Link to='products/pen'>
                        <img src="https://unsplash.com/photos/JDPDMaINjko/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8Q2FsbGlncmFwaHklMjBQZW5zfGVufDB8MHx8fDE3MTkzNzc1NjJ8MA&force=true&w=1920" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Calligraphy Pens</h4>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                    <Link to='products/ink'>
                        <img src="https://unsplash.com/photos/6JQSN8u5Fzg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8Y2FsbGlncmFwaHl8ZW58MHwwfHx8MTcxOTE2MzI1Mnww&force=true&w=1920" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Calligraphy Inks</h4>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                    <Link to='products/nibs'>
                        <img src="https://freepngimg.com/save/48492-calligraphy-pen-hd-free-png-hq/800x800" id='shop-by-img' alt="..." />
                    </Link>
                    <h4>Calligraphy Nibs</h4>
                </div>

            </div>
        </div>
    )
}

export default CategoryCard