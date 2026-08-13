import { toDoList } from "../data/todoList";
import Header from "../components/header";
import Footer from "../components/footer";

export default function ToDoList(){
    
    let name = "Thanakron Laingprom";
    const major = "เทคโนโลยีสารสนเทศ (Information Techonology)";
    let classYear = 2;
    let classSec = "ทส.ท.";
    let active = true;


    const isActive = (act: boolean) => {
    if (act)
    return <span style={{ color: "green"}}>กำลังศึกษาอยู่</span>;
    return <span style={{ color: "rad"}}>ไม่ได้เป็นนักศึกษาแล้วนะ</span>;
  }
    
    console.log(`Name: ${name} `);
    console.log(`Major: ${major} `);

  const tmp = toDoList.map((item,index) =>
    <>
    <div className="mx-25  w-full max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-md text-black" key={index}>
      หัวข้อ {item.title}
      คำอธิบาย {item.desc}
      วันที่ {item.date_added}
      ผู้เขียน {item.author}
      สถานะ {isActive(item.status)}
      </div>
     
    </>
  );
 return (
        <>
        <Header/>
     <main className=" bg-[#63b3ed] flex items-center justify-center px-4 py-10 h-screen  ">
    <div className="w-full max-w-md rounded-[28px]  overflow-hidden shadow-[0_35px_60px_-15px_rgba(15,23,42,0.35)] bg-white transition-shadow duration-300 hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)]">
        <div className="p-6 border border-gray-200 rounded-[28px]">
            <div className="mb-4">
                <p className="text-sm text-gray-600 flex items-center mb-2 font-medium">
                    TO DO LIST 
                    
                </p>
                <div className="text-gray-900 font-bold text-xl space-y-1 ">
                    <p>ชื่อ: {name}</p>
                    <p>สาขา: {major}</p>
                    <p>ชั้นปี: {classYear}</p>
                    <p>สถานะ: {isActive(active)}</p>

                </div>
            </div>
            
        </div>
    </div>
    
      {tmp}
      
      </main>
    <div>
   
    </div>
    <Footer />
    </>
  );

}