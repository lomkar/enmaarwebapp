// import CheckAuthComponent from "../components/CheckAuthComponent";
import HeaderComponent from "../components/HeaderComponent";
import LeftSideComponent from "../components/LeftSideComponent";
import RightSideComponent from "../components/RightSideComponent";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col h-full">
        <HeaderComponent />
        <div className="flex flex-row justify-center h-full">
          <div className="basis-[20%] border-r border-[#E7E5E4] bg-[#6A5BC2] w-full text-white justify-center p-6 h-full">
            <LeftSideComponent />
          </div>
          <div className="basis-[45%] flex px-5 pt-6 bg-[#F5F5F4] h-full">
            {children}
          </div>
          <div className="basis-[35%] border-l bg-[#6A5BC2] text-white border-[#E7E5E4] flex justify-center pt-6 h-full">
            <RightSideComponent />
          </div>
        </div>
      </div>
    </>
  );
}
