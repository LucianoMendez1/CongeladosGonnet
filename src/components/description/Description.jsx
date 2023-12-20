import BookDetail from "../arrbook/BookDetail";
import './description.css';
const Description = () => {

    const arrBook = [
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034663/1_vtxvj0.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034660/14_himxum.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034655/7_gpykl4.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034657/10_tycpba.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034378/Congelados%20gonnet/4_ashxbl.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1703034654/6_fxvxsx.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836522/Congelados%20gonnet/312708304_633817484894696_6648427633348045866_n_h96qc7.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836385/Congelados%20gonnet/386305546_821620323026161_8580771787723342863_n_vtz9zo.jpg'
        },
     
      ]
    return (
        <div>
                <BookDetail arrBook={arrBook} />
        </div>
    );
};

export default Description;