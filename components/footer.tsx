 export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-gray-300 pt-14 pb-8 border-t border-white/10">
      
      <div className="max-w-425 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            NATIONAL <span className="text-[#ee9d54]">ENGINEERS</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs">
            Delivering precision-engineered heat transfer equipment, fabrication
            solutions and industrial engineering services with unmatched quality
            and reliability.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a className="hover:text-[#ee9d54] transition" href="#">
              <i className="ri-facebook-fill text-2xl"></i>
            </a>
            <a className="hover:text-[#ee9d54] transition" href="#">
              <i className="ri-instagram-line text-2xl"></i>
            </a>
            <a className="hover:text-[#ee9d54] transition" href="#">
              <i className="ri-linkedin-box-fill text-2xl"></i>
            </a>
            <a className="hover:text-[#ee9d54] transition" href="#">
              <i className="ri-youtube-fill text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-[#ee9d54] transition" href="#">Home</a></li>
            <li><a className="hover:text-[#ee9d54] transition" href="#">About Us</a></li>
            <li><a className="hover:text-[#ee9d54] transition" href="#">Industries Served</a></li>
            <li><a className="hover:text-[#ee9d54] transition" href="#">Gallery</a></li>
            <li><a className="hover:text-[#ee9d54] transition" href="#">Contact</a></li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-[#ee9d54] transition" href="#">Heat Exchangers</a></li>
            <li><a className="hover:text-[#ee9d54] transition" href="#">Pressure Vessels</a></li>
            <li><a className="hover:text-[#ee9d54] transition" href="#">Reactors</a></li>
            <li><a className="hover:text-[#ee9d54] transition" href="#">Columns & Towers</a></li>
            <li><a className="hover:text-[#ee9d54] transition" href="#">Fabrication Services</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            <span className="font-medium text-gray-200">Address:</span><br />
Plot No. 1022, Cross Road No.87,<br/>
 Sachin GIDC, Surat - 394230
          </p>

          <p className="mt-3 text-sm text-gray-400">
            <span className="font-medium text-gray-200">Phone:</span><br />
            +91 95740 11132
          </p>

          <p className="mt-3 text-sm text-gray-400">
            <span className="font-medium text-gray-200">Email:</span><br />
            niraj@nationalengrs.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 mb-6 border-t border-white/10"></div>

      {/* Bottom Bar */}
      <div className="max-w-425 mx-auto px-6 flex flex-col md:flex-row justify-around items-center text-sm text-gray-400">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} National Engineers. All Rights Reserved.
        </p>

        <div className="flex gap-6 mt-3 md:mt-0 pb-5 md:pd-2">
          <a href="#" className="hover:text-[#ee9d54] transition">Privacy Policy</a>
          <a href="#" className="hover:text-[#ee9d54] transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
