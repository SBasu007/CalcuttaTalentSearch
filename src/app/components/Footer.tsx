const Footer = () => { 
    return(
        <div className="w-full bg-[#01315A] text-white py-8 sm:py-10 px-4 sm:px-6 md:px-20">
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8">
          <div>
            <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Talent Search School</h3>
            <p className="text-xs sm:text-sm">Government of West Bengal Registered Society</p>
            <p className="text-xs sm:text-sm">95, Baburam Ghosh Road Kolkata-700040 Oposite of Technition Studio</p>
          </div>
          <div>
            <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>Admissions</li>
              <li>Programs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Contact</h3>
            <p className="text-xs sm:text-sm">Email: calcuttatalentsearchschool@gmail.com</p>
            <p className="text-xs sm:text-sm">Phone: +91 9007727196 , 9432594197</p>
          </div>
        </div>
        <p className="text-center mt-4 sm:mt-6 text-gray-300 text-xs sm:text-sm">
          © 2025 Talent Search School. All rights reserved.
        </p>
      </div>
    )
}
export default Footer;