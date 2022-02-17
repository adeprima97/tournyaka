import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { Link } from 'react-router'


const Mengapa = () => {
    return (
        <div id= 'mengapa' classname = 'my-5 py-5'>
        <div className='d-flex justify-content-center my-5'>
        <p className='fs-3 fw-bolder text-center'>Mengapa Memilih Pangandaran?</p>
      </div>
      <Container className='my-5'>
        <Row>
          <Col className='me-5'>
            <div className='d-flex row gap-5 pb-3'>
              <div>
                <p className='fs-5 fw-bold'>Lepaskan penatmu, mari kita berlibur di Pangandaran!</p>
                <p>
                Tidak usah berpikir dua kali untuk mengunjungi Pangandaran, di sana terdapat banyak sekali destinasi yang bisa memanjakan dirimu, loh! Masih bingung mengapa harus memilih Pangandaran? Berikut kami sampaikan alasannya, ya!
                </p>
              </div>
              <div class="list">
                        <ul class="list-unstyled">
                        <li>Tidak usah berpikir dua kali untuk mengunjungi Pangandaran, di sana terdapat banyak sekali destinasi yang bisa memanjakan dirimu, loh!</li>
                        <li>Masih bingung mengapa harus memilih Pangandaran? Berikut kami sampaikan alasannya, ya!</li>
                        <ul>
                        <li>Memiliki berbagai pilihan pantai yang langsung menghadap ke samudra hindia yang wajib dikunjungi.</li>
                        <li>Memiliki objek wisata alam seperti, curug, goa sinjang lawan dan masih banyak lagi.</li>
                        <li>Terdapat pula body rafting yang banyak diminati wisatawan, seperti santirah, citumang, Goa lanang dan masih banyak lagi.</li>
                        <li>Seafoodnya yang melimpah dan tentunya dengan harga yang sangat terjangkau.</li>
                        </ul>
                        </ul>
                    </div>   
                    <div style={{textAlign: 'right', fontWeight: 800}}>
                    <a href='#' style={{color: 'orange', textDecoration: 'none'}}> What's Unique On Pangandaran? </a>
                    </div>
            </div>
          </Col>
        </Row>
      </Container>
        </div>
    )
}

export default Mengapa
