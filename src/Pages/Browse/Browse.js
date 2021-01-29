import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Moviecard from '../../Components/Moviecard/Moviecard';
import Navbar from '../../Components/Navbar/Navbar';
import {FaSearch as Search} from 'react-icons/fa';
import { Row, Col, Slider, Select } from 'antd';
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { useState, useEffect} from 'react';
import './Browse.css';

function Browse() {

    const [ lang, setLang ] = useState("");
    const [ genre, setGenre ] = useState("");

    const [ min, setMin ] = useState(1980);
    const [ max, setMax ] = useState(2020);

    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(12);
    const [pageCount, setPageCount] = useState(0)

    const { Option } = Select;

    // const getData = async() => {
    //     const res = 
    // }
    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      console.log(selectedPage);
      setOffset(selectedPage)
    };
  
   useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b981e34bc09ab4977d32afaffc7ec5ca&language=en-US&page=1`)
    .then(res => {
        const data = res.data.results;
                  const slice = data.slice((offset)*10, (offset+1)*10)
                  const postData = slice.map(pd => 
                  <Col key={pd.id} className="column" xs={{ span:10, offset:1 }} xl={{ span: 5, offset: 1 }}>
                  <Moviecard  
                      title={pd.title} 
                      date={pd.release_date} 
                      rating={pd.vote_average} 
                      pic={pd.poster_path} 
                      backpic={pd.backdrop_path}
                      desc={pd.overview} 
                      lang={pd.original_language} 
                  />
                </Col>
                // console.log(data)
                )
                  setData(postData)
                  setPageCount(Math.ceil(data.length / perPage))

    });
   }, [offset])

    function handleChangeLang(value) {
        setLang(value);
        console.log(lang);
    }

      function handleChangeGenre(value) {
        setGenre(value);
        console.log(genre);
    }

    function onChange(value) {
        console.log('onChange: ', value);
        // setMin(value);
        // setMax(value[1]);
        // console.log(min,max);
    }
      
      function onAfterChange(value) {

        // setMin(value[0]);
        // setMax(value[1]);
        console.log('onAfterChange: ',value);
        setMin(value[0]);
        setMax(value[1]);
        console.log(min,max);
    }

    const marks ={
        1980: {
            style: {
              color: '#FF9700',
            },
            label: <strong>1980</strong>,
        },
        1990: {
            style: {
              color: '#FF9700',
            },
            label: <strong>1990</strong>,
        },
        2000: {
            style: {
              color: '#FF9700',
            },
            label: <strong>2000</strong>,
        },
        2010: {
            style: {
              color: '#FF9700',
            },
            label: <strong>2010</strong>,
        },
        2020: {
            style: {
              color: '#FF9700',
            },
            label: <strong>2020</strong>,
        },
    }

    return(
        <div className="browse-cont">
            <Navbar/>
            <div className="browse-input">
                <form className="form-browse">
                    <input className="inputfield-browse" type="text" placeholder="Search"/>
                    <button className="btn-browse">
                        <Search/>
                    </button>
                </form>
                <Row>
                    <Col xs={{ span:10, offset:1 }} xl={{ span: 4, offset: 5 }}>
                        <label className="browse-label">Range of years</label>
                        <Slider className="slider-browse"
                            max={2020}
                            min={1980}
                            marks={marks}
                            range
                            step={10}
                            defaultValue={[1980, 2020]}
                            onChange={onChange}
                            onAfterChange={onAfterChange}  
                        />
                    </Col>
                    <Col xs={{ span:10, offset:1 }} xl={{ span: 2, offset: 1 }}>
                    <label className="browse-label">Genre</label><br/>
                        <Select defaultValue="All" style={{ width: 120 }} onChange={handleChangeGenre}>
                            <Option value="drama">Drama</Option>
                            <Option value="action">Action</Option>
                            <Option value="horror">Horror</Option>
                            <Option value="romance">Romance</Option>
                            <Option value="sci-fi">Sci-fi</Option>
                            <Option value="mystry">Mystry</Option>
                            <Option value="all">All</Option>
                        </Select>
                    </Col>
                    <Col xs={{ span:10, offset:1 }} xl={{ span: 2, offset: 1 }}>
                    <label className="browse-label">Language</label><br/>
                        <Select defaultValue="All" style={{ width: 120 }} onChange={handleChangeLang}>
                            <Option value="english">English</Option>
                            <Option value="arabic">Arabic</Option>
                            <Option value="french">French</Option>
                            <Option value="japanese">Japanese</Option>
                            <Option value="espanol">Espanol</Option>
                            <Option value="all">All</Option>
                        </Select>
                    </Col>
                    <Col xs={{ span:10, offset:1 }} xl={{ span: 2, offset: 1 }}>
                    <label className="browse-label">Rating</label><br/>
                        <Select defaultValue="All" style={{ width: 120 }} onChange={handleChangeLang}>
                            <Option value="9">9 and up</Option>
                            <Option value="8">8 and up</Option>
                            <Option value="7">7 and up</Option>
                            <Option value="6">6 and up</Option>
                            <Option value="5">5 and up</Option>
                            <Option value="all">All</Option>
                        </Select>
                    </Col>
                </Row>
            </div>
            <Row wrap>{data}</Row>
            <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
            />
            <Footer/>
        </div>
    );
}

export default Browse;