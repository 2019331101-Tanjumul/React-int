import Image from "next/image"
import { Menu, Download, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 lg:px-12 sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>

        <div className="hidden lg:block">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-sm font-medium">Log in</span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight tracking-tight text-black">
              Bringing you closer to the people
            </h1>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden max-w-md mx-auto lg:ml-auto lg:mr-0">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Person with orange hair in pink checkered top making hand gestures"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 grid lg:grid-cols-2 gap-12 lg:gap-24 items-end max-w-7xl mx-auto">
          <div className="relative">
            <div className="aspect-square max-w-sm">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Partial view of person"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="lg:text-right">
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight tracking-tight">
              <span className="text-pink-500">and things</span>
              <br />
              <span className="text-pink-500">you love</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Sticky Transition Section */}
      <div className="relative">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative h-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="Community of diverse people using Instagram"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Sliding Text Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-4xl mx-auto">
                <h3 className="text-4xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-8">
                  {"We're committed to fostering a safe and supportive community for everyone"}
                </h3>
                <div className="flex items-center justify-center gap-4 text-xl lg:text-2xl">
                  <span>Community</span>
                  <ArrowRight className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for scroll effect */}
        <div className="h-screen"></div>
      </div>

      {/* Community Safety Section */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-4xl lg:text-6xl font-normal leading-tight text-black mb-8">
                Building a safer community
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're working to make Instagram a place where everyone feels safe to express themselves. Our community
                guidelines help create a positive environment for all users.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span className="text-lg text-gray-700">Anti-bullying measures</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span className="text-lg text-gray-700">Content moderation</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span className="text-lg text-gray-700">Mental health resources</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span className="text-lg text-gray-700">Privacy controls</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Instagram safety features interface"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-light text-black mb-4">2B+</div>
              <p className="text-lg text-gray-600">Monthly active users</p>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-light text-black mb-4">500M+</div>
              <p className="text-lg text-gray-600">Daily active users</p>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-light text-black mb-4">95M+</div>
              <p className="text-lg text-gray-600">Photos shared daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h3 className="text-4xl lg:text-6xl font-normal leading-tight text-black mb-8">Share your story</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                From everyday moments to life's highlights, share it all with your friends and followers. Express
                yourself with photos, videos, Stories, and Reels.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Instagram Stories interface"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="lg:order-2">
              <h3 className="text-4xl lg:text-6xl font-normal leading-tight text-black mb-8">Discover new interests</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore content from creators you love and discover new accounts that share your passions. From cooking
                to travel, find inspiration everywhere.
              </p>
            </div>
            <div className="relative lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-100">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Instagram Explore page"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-4xl lg:text-6xl font-normal leading-tight text-black mb-8">Connect with friends</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay in touch with the people who matter most. Send messages, share posts, and keep up with what your
                friends are doing.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Instagram Direct messages"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-5xl lg:text-7xl font-normal leading-tight mb-8">Get the app</h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Download Instagram for iOS and Android to start sharing your moments with the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
              <Download className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
              <Play className="mr-2 h-5 w-5" />
              Get it on Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Community</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Tips
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Developers</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
              <span className="text-gray-600">© 2024 Instagram from Meta</span>
            </div>
            <div className="flex gap-6 text-gray-600">
              <a href="#" className="hover:text-black transition-colors">
                English
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Help
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
