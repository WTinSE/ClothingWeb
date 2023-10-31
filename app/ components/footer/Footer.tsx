import Container from "../Container";
import FooterList from "../footer/FooterList";
import Link from "next/link";
import {MdFacebook} from 'react-icons/md'
import {AiFillTwitterCircle,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'

const Footer  = () => {
    return ( <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold
                    mb-2">Shop Categories</h3>
                    <Link href='#'>Quan Dai</Link>
                    <Link href='#'>Ao so mi</Link>
                    <Link href='#'>Ao thun</Link>
                    <Link href='#'>Ao khoat</Link>
                    <Link href='#'>Quan sort</Link>
                    <Link href='#'>Phu kien</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold
                    mb-2">Customer Sevice</h3>
                    <Link href='#'>Contact Us</Link>
                    <Link href='#'>Shipping Policy</Link>
                    <Link href='#'>Return & Exchanges</Link>
                    <Link href='#'>Watches</Link>
                    <Link href='#'>FAQs</Link>
                </FooterList>
               
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">About Us</h3>
                        <p className="mb-2">
                        "Chào mừng bạn đến với cửa hàng thời trang của chúng tôi, nơi chúng tôi tự hào giới thiệu bộ sưu tập đa dạng với các loại trang phục từ áo sơ mi thanh lịch đến quần jean cá tính và váy dự tiệc lộng lẫy. Chúng tôi cam kết mang đến cho bạn sự lựa chọn phong phú để bạn có thể thể hiện phong cách riêng mình mỗi ngày. Đội ngũ chuyên nghiệp của chúng tôi sẵn sàng tư vấn và hỗ trợ bạn trong việc tìm kiếm sản phẩm phù hợp nhất. Hãy tham gia chúng tôi trên hành trình thời trang đầy màu sắc và sáng tạo."
                        </p>
                        <p>&copy;{new Date().getFullYear()} E~Shop. All rights reserved</p>
                    </div>
                    <FooterList>
                    <h3 className="text-base font-bold mb-2">Follow Us</h3>
                    <div className="flex gap-2">
                        <Link href="#">
                            <MdFacebook size ={24}/>
                        </Link>
                        <Link href="#">
                            <AiFillTwitterCircle size ={24}/>
                        </Link>
                        <Link href="#">
                            <AiFillInstagram size ={24}/>
                        </Link>
                         <Link href="#">
                            <AiFillYoutube size ={24}/>
                        </Link>
                    </div>
                    </FooterList>
            </div>
        </Container>
    </footer>
     ) ;
}
 
export default Footer;