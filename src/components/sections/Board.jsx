import React from 'react';

const Board = () => {
  const faculty = [
    { id: 'F1', name: 'Sumit Kumar Jindal', title: 'Faculty Advisor', image: '/board/faculty.png' }
  ];

  const boardMembers = [
    { id: 'B1', name: 'Darrin Bright', title: 'Chairperson', image: '/board/Darrin.webp' },
    { id: 'B2', name: 'Anvi Kapoor', title: 'Vice-Chairperson', image: '/board/Anvi.webp' },
    { id: 'B3', name: 'Vasu Johri', title: 'Secretary', image: '/board/Vasu.webp' },
    { id: 'B4', name: 'Sparsh Srivastava', title: 'Co-Secretary', image: '/board/Sparsh.webp' },
    { id: 'B5', name: 'Khyati Kejriwal', title: 'Technical Head', image: '/board/Khyati.webp' },
    { id: 'B6', name: 'Namratha K', title: 'Design Head', image: '/board/Namrata.webp' },
    { id: 'B7', name: 'Divyal Gupta', title: 'Finance Head', image: '/board/Divyal.webp' },
    { id: 'B8', name: 'Ayushmaan Mishra', title: 'Events Head', image: '/board/Ayushmaan.webp' },
    { id: 'B9', name: 'Kamya Mittal', title: 'Management Head', image: '/board/Kamya.webp' },
    { id: 'B10', name: 'Swastika Mishra', title: 'HR Head', image: '/board/Swastika.webp' }
  ];

//   const seniorCore = [
//   { id: 'S1', name: 'Anupam Hari', title: 'Embedded Lead', image: '/board/Anupam.png' },
//   { id: 'S2', name: 'Sharan', title: 'Events Lead', image: '/board/Sharan.png' },
//   { id: 'S3', name: 'Damini K', title: 'Events Lead', image: '/board/Damini.png' },
//   { id: 'S4', name: 'Taher', title: 'Events Lead', image: '/board/Taher.png' },
//   { id: 'S5', name: 'Dheeraj V P', title: 'Web Dev Lead', image: '/board/Dheeraj.png' },
//   { id: 'S6', name: 'Nikin', title: 'Web Dev Lead', image: '/board/Nikin.webp' },
//   { id: 'S7', name: 'Harisarvesh', title: 'Finance Lead', image: '/board/Harisarvesh.png' },
//   { id: 'S8', name: 'Karan Parekh', title: 'Finance Lead', image: '/board/Karan.png' },
//   { id: 'S9', name: 'Harshvardhan', title: 'Marketing Lead', image: '/board/Harshvardhan.png' },
//   { id: 'S10', name: 'Jacob Thomas', title: 'Design Lead', image: '/board/Jacob.png' },
//   { id: 'S11', name: 'Sanjushree', title: 'AI/Ml Lead', image: '/board/Sanjusree.webp' },
//   { id: 'S12', name: 'Shrikar', title: 'Mechatronics Lead', image: '/board/Shrikar.png' },
//   { id: 'S13', name: 'Miruthula', title: 'Editoral Lead', image: '/board/Miruthula.png' }
// ];


  return (
    <div className="min-h-screen font-mono p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold text-center mt-6 mb-8 text-white">
          Circuit Board Architecture
        </h1>
        <div className="relative rounded-xl p-6 sm:p-8 md:p-10 overflow-hidden backdrop-blur-sm">
          <div className="relative z-10 mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-purple-300 uppercase tracking-widest">
              Faculty Advisor Unit
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {faculty.map((member) => (
                <div key={member.id} className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[19%] bg-gradient-to-br from-indigo-800/40 to-purple-800/40 pt-4 rounded-lg shadow-2xl px-0 text-center  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-400/40 backdrop-blur-sm">
                  <div className="text-purple-100 text-base sm:text-lg font-semibold">{member.name}</div>
                  <div className="text-purple-200 text-sm mt-1">{member.title}</div>
                  <img src={member.image} alt={member.name} className="w-40 h-40 rounded-lg mt-3 mx-auto" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-purple-300 uppercase tracking-widest">
              Board & Leadership Module
            </h2>
            <div className="flex flex-wrap justify-around gap-6 ">
              {boardMembers.map((member) => (
                <div
                  key={member.id}
                  className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[17%] bg-gradient-to-br from-indigo-800/40 to-purple-800/40 pt-4 rounded-lg shadow-2xl px-0 text-center  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-400/40 backdrop-blur-sm"
                >
                  <div className="text-purple-100 text-base font-semibold truncate">{member.name}</div>
                  <div className="text-purple-200 text-sm mt-1 truncate">{member.title}</div>
                  <img src={member.image} alt={member.name} className="w-45 h-45 rounded-xl mx-auto object-fit" />
                </div>
              ))}
            </div>
          </div>
          {/* <div className="relative z-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-purple-300 uppercase tracking-widest">
              Peripheral Modules - Senior Core
            </h2>
            <div className="flex flex-wrap justify-evenly gap-6">
              {seniorCore.map((member) => (
                <div
                  key={member.id}
                  className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[17%] bg-gradient-to-br from-violet-800/40 to-purple-900/40 rounded-lg pt-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-400/40 backdrop-blur-sm"
                >
                  <div className="text-purple-100 text-base font-semibold truncate">{member.name}</div>
                  <div className="text-purple-200 text-sm mt-1 truncate">{member.title}</div>
                  <img src={member.image} alt={member.name} className="w-45 h-45 rounded-lg mx-auto" />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Board;
