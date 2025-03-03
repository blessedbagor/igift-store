import { Card, CardContent } from "@/components/ui/card";
import { ArrowBigDown } from "lucide-react";
import Image from "next/image";

const Ingredients = () => {
    return ( 
    <div className='max-w-4xl mx-auto text-center'>
    <h2 className='text-5xl md:text-6xl text-center mt-12'>Stronger Immunity, More Energy, and Fewer Sick Days</h2>
    
    <Card className="flex flex-col md:flex-row gap-4 p-6  border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
        <div className="rounded-2xl">
          {/* Left Image Section */}
          <div className="flex-shrink-0">
            <Image
              src="/images/astaxanthin.png"
              alt="Astaxanthin Image"
              width={200}
              height={200}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

      {/* Right Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">Astaxanthin </h3>
        <p className="mb-4 font-bold">Feeling too tired to enjoy your family after work?</p>
        <p>
          Astaxanthin fights inflammation and helps you bounce back faster, keeping you energized
          and ready for quality time with your loved ones.
        </p>
      </CardContent>
    </Card>

    <Card className="flex flex-col md:flex-row gap-4 p-6 border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
      {/* Left Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">Rosehips Extract</h3>
        <p className="mb-4 font-bold">Skin looking dull from stress?</p>
        <p>
          Rosehips, packed with Vitamin C, not only keep your immune system strong but also give your skin a healthy glow—because looking good is part of feeling good.
        </p>
      </CardContent>

      {/* Right Image Section */}
      <div className="rounded-2xl">
        <div className="flex-shrink-0">
          <Image
            src="/images/rosehips-extract.png"
            alt="Rosehips Image"
            width={350}
            height={350}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </Card>

    <Card className="flex flex-col md:flex-row gap-4 p-6  border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
      {/* Left Image Section */}
      <div className="rounded-2xl">
        <div className="flex-shrink-0">
          <Image
            src="/images/inulin-fiber.png"
            alt="Inulin Fiber Image"
            width={250}
            height={250}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Right Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">Inulin Fiber</h3>
        <p className="mb-4 font-bold">Always bloated or sluggish?</p>
        <p>
          A healthy gut is essential for immunity and energy. Inulin Fiber supports good gut bacteria, keeping you focused and fueled for the day.
        </p>
      </CardContent>
    </Card>

    <Card className="flex flex-col md:flex-row gap-4 p-6  border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
      {/* Left Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">Citrus Bioflavonoids</h3>
        <p className="mb-4 font-bold">Exposed to pollution and stress?</p>
        <p>
        Citrus Bioflavonoids protect your body from harmful free radicals, so you stay strong no matter what your environment throws at you.
        </p>
      </CardContent>

      {/* Right Image Section */}
      <div className="rounded-2xl">
        <div className="flex-shrink-0">
          <Image
            src="/images/citrus-bioflavonoids.png"
            alt="Citrus Bioflavonoids Image"
            width={250}
            height={250}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </Card>

    
    <Card className="flex flex-col md:flex-row gap-4 p-6  border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
      {/* Left Image Section */}
      <div className="rounded-2xl">
        <div className="flex-shrink-0">
          <Image
            src="/images/sodium-ascorbate.png"
            alt="Vitamin C Image"
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Right Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">Sodium Ascorbate</h3>
        <p className="mb-4 font-bold">Don&apos;t want to feel that first sneeze coming on?</p>
        <p>
        Sodium Ascorbate keeps your immune system ready to fight back before sickness slows you down.
        </p>
      </CardContent>
    </Card>

    <Card className="flex flex-col md:flex-row gap-4 p-6  border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
      {/* Left Image Section */}
      <div className="rounded-2xl">
        <div className="flex-shrink-0">
          <Image
            src="/images/vitamin-d3.png"
            alt="Vitamin D3 Image"
            width={350}
            height={350}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Right Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">Vitamin D3</h3>
        <p className="mb-4 font-bold">Always stuck indoors?</p>
        <p>
        A lack of sunlight can weaken your immunity. 
        Vitamin D3 fills that gap, keeping your defenses strong so you can power through your daily grind without getting sick.
        </p>
      </CardContent>
    </Card>

    <Card className="flex flex-col md:flex-row gap-4 p-6  border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
      {/* Left Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">Lysine & Magnesium</h3>
        <p className="mb-4 font-bold">Tired of feeling drained?</p>
        <p>
        These nutrients help you stay energized, mentally sharp, and physically strong.
        </p>
      </CardContent>

      {/* Right Image Section */}
      <div className="rounded-2xl">
        <div className="flex-shrink-0">
          <Image
            src="/images/lysine-magnesium.png"
            alt="Lysine & Magnesium Image"
            width={350}
            height={350}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </Card>

    <Card className="flex flex-col md:flex-row gap-4 p-6  border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
      {/* Left Image Section */}
      <div className="rounded-2xl">
        <div className="flex-shrink-0">
          <Image
            src="/images/zinc.png"
            alt="Zinc Image"
            width={250}
            height={250}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Right Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">Zinc</h3>
        <p className="mb-4 font-bold">Ever dragged yourself through work with a cold?</p>
        <p>
        Zinc helps your body fight infections and speeds up recovery, getting you back to work and your family faster.
        </p>
      </CardContent>
    </Card>

    <Card className="flex flex-col md:flex-row gap-4 p-6  border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
      {/* Left Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">B Vitamins</h3>
        <p className="mb-4 font-bold">Mental fog slowing you down?</p>
        <p>
        B vitamins supercharge your brain and body to keep you productive all day.
        </p>
      </CardContent>

      {/* Right Image Section */}
      <div className="rounded-2xl">
        <div className="flex-shrink-0">
          <Image
            src="/images/b-vitamins.png"
            alt="B Vitamins Image"
            width={250}
            height={250}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </Card>

    <Card className="flex flex-col md:flex-row gap-4 p-6  border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
      {/* Left Image Section */}
      <div className="rounded-2xl">
        <div className="flex-shrink-0">
          <Image
            src="/images/iron.png"
            alt="Iron Image"
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Right Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">Iron</h3>
        <p className="mb-4 font-bold">Running on empty?</p>
        <p>
        Iron ensures your body gets the oxygen it needs to keep fatigue at bay.
        </p>
      </CardContent>
    </Card>

    <Card className="flex flex-col md:flex-row gap-4 p-6  border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
      {/* Left Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">Calcium</h3>
        <p className="mb-4 font-bold">Struggling with weak bones and cramps?</p>
        <p>
        Calcium helps keep your bones strong and muscles functioning smoothly, so you can move without discomfort.
        </p>
      </CardContent>

      {/* Right Image Section */}
      <div className="rounded-2xl">
        <div className=" bg-white rounded-xl flex-shrink-0">
          <Image
            src="/images/calcium.png"
            alt="Calcium Image"
            width={250}
            height={250}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </Card>

    <Card className="flex flex-col md:flex-row gap-4 p-6  border-yellow-400 border hover:border-2 rounded-2xl shadow-lg mt-12 ">
      {/* Left Image Section */}
      <div className="rounded-2xl">
        <div className="flex-shrink-0">
          <Image
            src="/images/vitamin-a-e.png"
            alt="Vitamin A & E Image"
            width={250}
            height={250}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Right Description Section */}
      <CardContent className="flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 uppercase">Vitamin A & E</h3>
        <p className="mb-4 font-bold">Want to stay resilient?</p>
        <p>
        These antioxidants protect your cells and keep you healthy long-term.
        </p>
      </CardContent>
    </Card>
    </div> 
    );
}
 
export default Ingredients;