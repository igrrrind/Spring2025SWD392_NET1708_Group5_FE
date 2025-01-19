import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-white to-white">
      {/* Hero Section */}
      <section className="container min-h-screen flex flex-col justify-center  mx-auto px-4 pt-16 pb-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-unbounded font-bold mb-6">
            Find Passionate Tutors Here
          </h1>
          <p className="text-xl mb-8">
            Whether Online or Offline, Tutorly has you covered!
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter a subject name..."
                className="w-full h-12 pl-4 pr-12 rounded-lg bg-white text-gray-900"
              />
              <Button
                className="absolute right-1 top-1 bg-purple-500 transition duration-300 hover:bg-primary-dark hover:text-purple-500"
                size="icon"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Popular Subjects */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-white/90">Popular:</span>
            <a href="#" className="text-white/90 transition hover:text-white">
              English
            </a>
            <a href="#" className="text-white/90 transition hover:text-white">
              IELTS
            </a>
            <a href="#" className="text-white/90 transition hover:text-white">
              TOEIC
            </a>
            <a href="#" className="text-white/90 transition hover:text-white">
              Python
            </a>
            <a href="#" className="text-white/90 transition hover:text-white">
              Chemistry 12
            </a>
            <a href="#" className="text-white/90 transition hover:text-white">
              Math 12
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1a1333] mb-4">
              A Transparent & Secure Tutoring Platform
            </h2>
          </div>

          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1a1333] mb-4">
                Tutor Profiles That Summarize Everything You Need
              </h3>
              <p className="text-[#1a1333]/80">
                Easily assess effectiveness, skills, and teaching style to make the best decision.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1a1333] mb-4">
                Verified Tutors with Credentials
              </h3>
              <p className="text-[#1a1333]/80">
                On Tutorly, all tutors are verified through a thorough certification process before their profiles are posted.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1a1333] mb-4">
                Privacy, Anti-Spam, and Scam-Free
              </h3>
              <p className="text-[#1a1333]/80">
                Payments to tutors are calculated per session. Sessions and transactions only occur after both parties fulfill their financial obligations through Tutorly.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1a1333] mb-4">
                Learn with Exclusive Offers
              </h3>
              <p className="text-[#1a1333]/80">
                Tutorly is not just a tutoring platform but also an educational community. Students, parents, and tutors can participate in events, grab vouchers, and enjoy much more!
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-[#1a1333] hover:bg-[#1a1333]/90 text-white px-8 py-6 text-lg rounded-xl">
              I want to find a tutor now!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
