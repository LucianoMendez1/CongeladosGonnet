import BookDetail from "../arrbook/BookDetail";
import './description.css';
const Description = () => {

    const arrBook = [
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836522/Congelados%20gonnet/312708304_633817484894696_6648427633348045866_n_h96qc7.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836385/Congelados%20gonnet/166610826_807897109828557_6990238484478294060_n_gg4wae.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836385/Congelados%20gonnet/292106793_441086904270357_8898818312377327728_n_adcqez.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836523/Congelados%20gonnet/334503955_139769822341679_2424654153657741900_n_z1suoq.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836385/Congelados%20gonnet/280656954_515481630050281_911059872857348767_n_xttxvi.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836385/Congelados%20gonnet/339978298_1054561692170116_2856319343052655225_n_cw7u4t.jpg'
        },
        {
          img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1699836385/Congelados%20gonnet/292106793_441086904270357_8898818312377327728_n_adcqez.jpg'
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