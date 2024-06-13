import { WobbleCard } from "@/components/ui/wobble-card";

export function Hero() {
  return (
    <div
      id="home"
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full"
    >
      <WobbleCard
        containerClassName="col-span-1  lg:col-span-2 h-full bg-gradient-to-r from-cyan-500 to-blue-500 min-h-[500px] lg:min-h-[300px] bg-[url('https://www.zdnet.com/a/img/resize/e3e6ae9061b99d592bde4404dc2612a2a4a890ad/2018/10/01/5622a0e8-8ac8-42e4-9b8a-f481277db052/5bb1184c60b2bb5d7aa7458c-1280x7201oct012018213629poster.jpg?auto=webp&fit=crop&frame=1&height=814.5&width=1449')] bg-no-repeat bg-cover"
        className="cus-backdrop-blur"
      >
        <div className="max-w-2xl">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl 2xl:text-5xl font-semibold tracking-[-0.015em] text-white">
            Welcome to CodeMaster Bootcamp
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Transform your coding skills with our hands-on, expert-led bootcamps
            designed for all levels. Join us and become a coding master!
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        className="cus-backdrop-blur"
        containerClassName="col-span-1 min-h-[300px] bg-[url('https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg')] bg-cover bg-no-repeat"
      >
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Discover Our Diverse Events
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard
        className="cus-backdrop-blur"
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-no-repeat bg-cover bg-[url('https://wallpapers.com/images/hd/4k-programming-green-codes-rcr8xxwxkz5p4m69.jpg')]"
      >
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Learn from the Best
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Our instructors are industry experts passionate about teaching. Get
            personalized guidance and support to help you achieve your coding
            goals.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}
