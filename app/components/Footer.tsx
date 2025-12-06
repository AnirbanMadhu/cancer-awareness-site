export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">About Us</h3>
            <p className="text-gray-300">
              Dedicated to raising awareness about cancer prevention, early detection,
              and supporting those affected by cancer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#quotes" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Inspirational Quotes
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Get Involved</h3>
            <p className="text-gray-300 mb-4">
              Join us in making a difference in the fight against cancer.
            </p>
            <a
              href="#contact"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cancer Awareness & Support. All rights reserved.</p>
          <p className="mt-2 text-sm">Together we can make a difference.</p>
        </div>
      </div>
    </footer>
  );
}
