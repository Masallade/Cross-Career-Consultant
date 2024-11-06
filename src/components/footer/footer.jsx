import React from 'react';
import footerImage from '../../assets/footer.png';

const Footer = () => {
    return (
        <footer className=" lg:h-[80vh] md:h-[70vh] sm: h-[60vh] xxxxs:h-[40vh]
        
        relative bg-secondary2 text-white  overflow-hidden  w-full ">
            <div className="absolute inset-0 bg-secondary2 opacity-140 z-20"></div>


    <div className='z-[0] flex flex-row justify-start items-start h-full w-full overflow-hidden'> 
      <img className="z-[2] w-[20%] h-full object-cover" src={footerImage} alt="" />
      <img className="z-[2] w-[20%] h-full object-cover" src={footerImage} alt="" />
      <img className="z-[2] w-[20%] h-full object-cover" src={footerImage} alt="" />
      <img className="z-[2] w-[20%] h-full object-cover" src={footerImage} alt="" />
      <img className="z-[2] w-[20%] h-full object-cover" src={footerImage} alt="" />
      <img className="z-[2] w-[20%] h-full object-cover" src={footerImage} alt="" />


    </div>

            

            <div className="absolute top-0 z-30 m-[4%] flex flex-row h-full w-screen  items-start justify-between">
                
                <div className="flex-1 mb-6 md:mb-0">
                    <h4 className="footer-heading-responsive text-primaryAmber uppercase mb-[2%]">Quick Links</h4>
                    <ul>
                        <li className="mb-[2%]"><a href="#home" className="text-responsive text-white hover:text-yellow-400 transition-colors">Home</a></li>
                        <li className="mb-[2%]"><a href="#about" className="text-responsive text-white hover:text-yellow-400 transition-colors">Immigration</a></li>
                        <li className="mb-[2%]"><a href="#services" className="text-responsive text-white hover:text-yellow-400 transition-colors">WorPermit</a></li>
                        <li className="mb-[2%]"><a href="#contact" className="text-responsive text-white hover:text-yellow-400 transition-colors">Residency</a></li>
                        <li className="mb-[2%]"><a href="#services" className="text-responsive text-white hover:text-yellow-400 transition-colors">Student</a></li>
                        <li className="mb-[2%]"><a href="#contact" className="text-responsive text-white hover:text-yellow-400 transition-colors">Professional</a></li>
                        <li className="mb-[2%]"><a href="#services" className="text-responsive text-white hover:text-yellow-400 transition-colors">contact</a></li>
                        <li className="mb-[2%]"><a href="#contact" className="text-responsive text-white hover:text-yellow-400 transition-colors">About</a></li>
                    </ul>
                </div>

                <div className="flex-1 mb-6 md:mb-0">
                    <h4 className="footer-heading-responsive text-primaryAmber uppercase mb-[2%]">Follow Us</h4>
                    <ul className="flex gap-4">
                        <li><a href="https://www.facebook.com" className="text-white hover:text-yellow-400 transition-colors"><i className="fab fa-facebook text-responsive"></i></a></li>
                        <li><a href="https://www.twitter.com" className="text-white hover:text-yellow-400 transition-colors"><i className="fab fa-twitter text-responsive"></i></a></li>
                        <li><a href="https://www.instagram.com" className="text-white hover:text-yellow-400 transition-colors"><i className="fab fa-instagram text-responsive"></i></a></li>
                        <li><a href="https://www.linkedin.com" className="text-white hover:text-yellow-400 transition-colors"><i className="fab fa-linkedin text-responsive"></i></a></li>
                    </ul>
                </div>

                <div className="flex-1 mb-6 md:mb-0">
                    <h4 className="footer-heading-responsive text-primaryAmber uppercase mb-[2%]">Contact Us</h4>
                    <p className="text-responsive mb-[2%]">Email: avantcoretechnology.com</p>
                    <p className="text-responsive mb-[2%]">Phone: +123-456-7890</p>
                </div>

                <div className="flex-1 mb-6 md:mb-0">
                    <h4 className="footer-heading-responsive text-primaryAmber uppercase mb-[2%]">Career</h4>
                    <p className="text-responsive mb-[2%]">Job: digital marketing</p>
                    <p className="text-responsive mb-[2%]">Internship: consultant</p>
                </div>
            </div>

            <div className="text-responsive text-center py-[1%] bg-black text-gray-400 text-sm relative z-30">
                <p>&copy; {new Date().getFullYear()} Cross Career Consultant. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
