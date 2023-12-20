import BookDetail from "../arrbook/BookDetail";
import './description.css';
const Description = () => {

    const arrBook = [
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034663/Congelados%20gonnet/1_vtxvj0.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034665/Congelados%20gonnet/4_lji409.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034660/Congelados%20gonnet/14_himxum.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034655/Congelados%20gonnet/7_gpykl4.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034656/Congelados%20gonnet/8_cmbav8.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034654/Congelados%20gonnet/6_fxvxsx.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836522/Congelados%20gonnet/312708304_633817484894696_6648427633348045866_n_h96qc7.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836385/Congelados%20gonnet/386305546_821620323026161_8580771787723342863_n_vtz9zo.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034663/Congelados%20gonnet/2_sgyiun.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836385/Congelados%20gonnet/166610826_807897109828557_6990238484478294060_n_gg4wae.jpg'
        },
     
      ]
    return (
        <div>
                <BookDetail arrBook={arrBook} />
        </div>
    );
};

export default Description;