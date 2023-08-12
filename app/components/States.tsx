import type { NextComponentType } from "next";
import Image from "next/image";
import circleImg from "../images/circle-map.png";
import IndiaGate from "../images/india-gate.jpg"
import CharMinar from "../images/char-minar.jpg";
import Pune from "../images/pune.jpg";
import Chennai from "../images/chennai.jpg";
import UniversityLogo from "../images/university-logo.png";

const States: NextComponentType = () => {
    return (
        <>
            <section className="pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px] text-black">
                <div className="innerDiv mx-auto">
                    <div className="flex flex-wrap sm:-mx-3 justify-between items-center">
                        <div className="xl:w-1/2 w-full sm:px-3 text-center lg:text-left lg:order-3 mt-9 lg:mt-0">
                            <h3 className="text-[36px] lg:text-[54px] md:text-[42px] font-[700] text-primary capitalize leading-none">AIB</h3>
                            <h3 className="text-[36px] lg:text-[54px] md:text-[42px] font-[700] capitalize">campuses</h3>
                            <p className="md:text-[20px] lg:text-[24px] font-[500] mt-2">We are currently located at New Delhi, Hyderabad, Bangalore, Chennai, Kerala, Pune and Kolkata.</p>
                        </div>
                        <div className="xl:w-5/12 w-full sm:px-3 relative">
                            <div className="relative circle-img">
                                <Image src={circleImg} width={656} height={607} alt="" objectFit="contain" />
                                <div className="absolute top-0 left-[50%] translate-x-[-50%] hover-effect">
                                    <div className="card-smaill cursor-pointer">
                                        <Image src={IndiaGate} alt="" className="object-cover min-w-[120px] min-h-[120px] md:w-[180px] md:h-[180px]" />
                                    </div>
                                </div>
                                {/* <div className="card bg-white rounded-[21px] z-[100] w-[297px] absolute sm:bottom-[5%] bottom-0 left-[50%]">
                                    <Image src={iitDelhiImg} width={297} height={146} alt="" className="rounded-t-[21px]" />
                                    <div className="UniversityLogo mx-auto text-center mt-[-40px]">
                                        <Image src={UniversityLogo} width={70} height={70} alt="w-[70px] h-[70px]" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="text-center text-[24px] font-[600]">IIT Delhi</h4>
                                        <p className="text-[#5C5C5C] text-center">New Delhi, India</p>
                                        <h3 className="text-center font-[500] text-[24px]">Ranked 4 For Overall By NIRF 2022</h3>
                                    </div>
                                </div> */}
                                <div className="absolute top-[50%] sm:left-[50px] hover-effect2 left-[20px] translate-y-[-50%] cursor-pointer">
                                    <div className="card-xs">
                                        <Image src={Pune} alt="" className="min-w-[80px] min-h-[80px] md:w-[100px] md:h-[100px]" />
                                    </div>
                                </div>
                                {/* <div className="card bg-white rounded-[21px] z-[100] w-[297px] absolute sm:bottom-[5%] bottom-0 left-[50%] translate-x-[-50%]">
                                    <Image src={jamiaImg} width={297} height={146} alt="" className="rounded-t-[21px]" />
                                    <div className="UniversityLogo mx-auto text-center mt-[-40px]">
                                        <Image src={UniversityLogo} width={70} height={70} alt="" className="w-[70px] h-[70px]" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="text-center text-[24px] font-[600]">Jamia Millia Islamia</h4>
                                        <p className="text-[#5C5C5C] text-center">New Delhi, India</p>
                                        <h3 className="text-center font-[500] text-[24px]">Ranked 13 For Overall By NIRF</h3>
                                    </div>
                                </div> */}
                                <div className="hover-effect3 cursor-pointer absolute top-[50%] sm:right-[50px] right-[25px] translate-y-[-50%] eff">
                                    <div className="card-xs">
                                        <Image src={CharMinar} alt="" className="w-[70px] h-[70px] md:w-[90px] md:h-[90px]" />
                                    </div>
                                </div>
                                {/* <div className="card bg-white rounded-[21px] z-[100] w-[297px] absolute sm:bottom-[5%] bottom-0 left-[50%] translate-x-[-50%]">
                                    <Image src={delhiTechnicalImg} width={297} height={146} alt="" className="rounded-t-[21px]" />
                                    <div className="UniversityLogo mx-auto text-center mt-[-40px]">
                                        <Image src={UniversityLogo} width={70} height={70} alt="" className="w-[70px] h-[70px]" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="text-center text-[24px] font-[600]">Delhi Technical University</h4>
                                        <p className="text-[#5C5C5C] text-center">New Delhi, India</p>
                                        <h3 className="text-center font-[500] text-[24px]">Ranked 63 For Overall By NIRF 2022</h3>
                                    </div>
                                </div> */}
                                <div className="hover-effect4 cursor-pointer absolute left-[50%] sm:bottom-[30px] bottom-[10px] translate-x-[-50%]">
                                    <div className="card-xs">
                                        <Image src={Chennai} alt="" className="min-w-[60px] min-h-[60px] md:w-[80px] md:h-[80px]" />
                                    </div>
                                </div>
                                {/* <div className="card bg-white rounded-[21px] z-[100] w-[297px] absolute sm:bottom-[0] bottom-0 left-[50%] translate-x-[-50%]">
                                    <Image src={iiitDelhiImg} width={297} height={146} alt="" className="rounded-t-[21px]" />
                                    <div className="UniversityLogo mx-auto text-center mt-[-40px]">
                                        <Image src={UniversityLogo} width={70} height={70} alt="" className="w-[70px] h-[70px]" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="text-center text-[24px] font-[600]">IIIT Delhi</h4>
                                        <p className="text-[#5C5C5C] text-center">New Delhi, India</p>
                                        <h3 className="text-center font-[500] text-[24px]">Ranked 151 For Overall By NIRF 2022</h3>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default States;
