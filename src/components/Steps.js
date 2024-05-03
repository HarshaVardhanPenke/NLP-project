import { Step1, Step2, Step3, Step4 } from "../utils/Constants";

const Steps = () => {
    return (
        <div className=" bg-gradient-to-r from-teal-800 to-indigo-900 p-20">
            <h1 className="text-center text-3xl">Using QACrafter is as easy as this</h1>
            <div className="flex justify-evenly">
                <div className="flex flex-col items-center">
                    <img src={Step1} alt="Step 1" />
                    <h1 className="mt-4">Choose your own content</h1>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Step2} alt="Step 2" />
                    <h1 className="mt-4">Select PDF or TEXT</h1>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Step3} alt="Step 3" />
                    <h1 className="mt-4">Submit Data</h1>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Step4} alt="Step 4" />
                    <h1 className="mt-4">Get Questions and Answers</h1>
                </div>
            </div>
        </div>
    );
}

export default Steps;
