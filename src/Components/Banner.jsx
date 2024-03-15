import bgImg from '../assets/banner.png';

const Banner = () => {
    const bg = {
        backgroundImage : `url(${bgImg})`,
    }
    return (
        <div style={bg} className="min-h-[600px] py-32 px-52 text-white text-center bg-cover">
            <h1  className="text-[52px] font-bold">Discover Your Custom Cooking Class Adventure!</h1>
            <p className="font-medium text-lg pt-6">Explore custom-tailored cooking classes designed to elevate your culinary skills and ignite your passion for food. Your gourmet journey starts here!</p>
            <div className="flex justify-center gap-6 items-center pt-10">
                <button className="px-7 py-5 bg-green-400 rounded-[50px] text-xl font-semibold border-2 border-green-400 text-black hover:bg-transparent hover:border-white    hover:text-white ease-in-out transition-all">Explore Now</button>
                <button className="px-7 py-5 bg-transparent rounded-[50px] text-xl font-semibold border-2 border-white hover:bg-green-400 hover:border-green-400 hover:text-black ease-in-out transition-all">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;