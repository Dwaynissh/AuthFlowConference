import VerifyCode from "./VerifyCode";

const Verifys = () => {
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center">
      <div className="h-[500px] w-[100%]">
        <div className="h-[200px] w-[100%]">
          <h1 className="font-bold text-3xl text-white text-center pt-8">
            Verify Code 🚀🚀
          </h1>
          <p className="font-bold text-white text-center pt-3">
            We just sent a six digit verification code to your Email
          </p>
          <p className="font-bold text-white text-center pt-3">
            Enter the code in the box below to continue
          </p>
        </div>
        <div className="h-[100px] w-[100%] flex justify-center items-center gap-9">
          <VerifyCode />
        </div>
        <p className="font-bold text-white text-center">
          Did'nt recieve a code?
          <span className="text-yellow-500"> Resend the code</span>
        </p>
      </div>
    </div>
  );
};

export default Verifys;
