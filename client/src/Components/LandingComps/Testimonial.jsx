import TestimoCard from "./TestimoCard";
import img1 from "../../assets/LandingImages/test1.jpeg";
import img2 from "../../assets/LandingImages/test2.jpeg";
import img3 from "../../assets/LandingImages/test3.jpeg";
import img4 from "../../assets/LandingImages/test4.jpeg";
import img5 from "../../assets/LandingImages/test5.jpeg";
import img6 from "../../assets/LandingImages/test6.jpeg";
 
const Testimonial = () => {
  const cards = [
    {
      name: "John Doe",
      src: img1,
      testimo: "I have been using their Service for years and couldn't be happier .They are always on time and very reliable. Highly recommeded"
    },
    {
      name: "Jane Smith",
      src: img2,
      testimo: "Their service was exceptional! They went above and beyond to ensure my satisfaction. I would definitely recommend them to others."
    },
    {
      name: "Michael Johnson",
      src: img3,
      testimo: "I was impressed by their professionalism and expertise. They made the entire process smooth and hassle-free."
    },
    {
      name: "Emily Brown",
      src: img4,
      testimo: "The team was incredibly helpful and responsive to my needs. I am very satisfied with their service."
    },
    {
      name: "Shraddha Kapoor",
      src: img5,
      testimo: "I had a great experience with their company. They exceeded my expectations in every way."
    },
    {
      name: "Olivia Taylor",
      src: img6,
      testimo: "Their customer service is top-notch. They went out of their way to resolve an issue I had. I'm a happy customer!"
    }
  ];

  return (
    <div className=" my-[150px] ">
      <div className="  flex flex-col items-center justify-center  text-[26px] font-semibold">
        Testimonials
        <div className="border-2 w-[7%] border-gray-600 "></div>
      </div>
      <div>
        <div className="flex justify-center gap-10 p-4 pt-10 flex-wrap   ">
          {cards.map((ele) => {
            return <TestimoCard src={ele.src} name={ele.name} testimo = {ele.testimo}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
