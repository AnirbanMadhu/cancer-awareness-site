export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image from Unsplash */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-purple-900/80"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Cancer Awareness & Support
        </h1>
        <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-2xl mx-auto">
          Together, we can make a difference. Join us in raising awareness, providing support,
          and fighting for a future free from cancer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Involved
          </a>
          <a
            href="#quotes"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg border-2 border-white transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
