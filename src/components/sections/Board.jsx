import React from 'react';

const Board = () => {
  const faculty = [
    { id: 'F1', name: 'Dr. Smith', title: 'Faculty Advisor', image: 'src/assets/board/faculty.png' }
  ];

  const boardMembers = [
    { id: 'B1', name: 'Alex Chen', title: 'Chairman', image: 'src/assets/board/faculty.png' },
    { id: 'B2', name: 'Sarah Kim', title: 'Vice Chair', image: 'src/assets/board/faculty.png' },
    { id: 'B3', name: 'Mike Johnson', title: 'Secretary', image: 'src/assets/board/faculty.png' },
    { id: 'B4', name: 'Emma Davis', title: 'Treasurer', image: 'src/assets/board/faculty.png' },
    { id: 'B5', name: 'David Lee', title: 'Operations', image: 'src/assets/board/faculty.png' },
    { id: 'B6', name: 'Lisa Wang', title: 'Strategy', image: 'src/assets/board/faculty.png' },
    { id: 'B7', name: 'Tom Brown', title: 'Outreach', image: 'src/assets/board/faculty.png' },
    { id: 'B8', name: 'Ana Garcia', title: 'Marketing', image: 'src/assets/board/faculty.png' },
    { id: 'B9', name: 'James Wilson', title: 'Finance', image: 'src/assets/board/faculty.png' },
    { id: 'B10', name: 'Rachel Green', title: 'Events', image: 'src/assets/board/faculty.png' }
  ];

  const seniorCore = [
    { id: 'S1', name: 'Kevin Liu', title: 'AI Lead', image: 'src/assets/board/faculty.png' },
    { id: 'S2', name: 'Maya Patel', title: 'Vision Lead', image: 'src/assets/board/faculty.png' },
    { id: 'S3', name: 'Ryan Zhang', title: 'Motor Control', image: 'src/assets/board/faculty.png' },
    { id: 'S4', name: 'Zoe Adams', title: 'Sensors', image: 'src/assets/board/faculty.png' },
    { id: 'S5', name: 'Jack Thompson', title: 'Mechanical', image: 'src/assets/board/faculty.png' },
    { id: 'S6', name: 'Priya Sharma', title: 'Electrical', image: 'src/assets/board/faculty.png' },
    { id: 'S7', name: 'Carlos Rodriguez', title: 'Software', image: 'src/assets/board/faculty.png' },
    { id: 'S8', name: 'Sophie Miller', title: 'Testing', image: 'src/assets/board/faculty.png' },
    { id: 'S9', name: 'Nathan Park', title: 'Research', image: 'src/assets/board/faculty.png' },
    { id: 'S10', name: 'Olivia Chang', title: 'Design', image: 'src/assets/board/faculty.png' },
    { id: 'S11', name: 'Ethan Moore', title: 'Analytics', image: 'src/assets/board/faculty.png' },
    { id: 'S12', name: 'Grace Kim', title: 'Operations', image: 'src/assets/board/faculty.png' },
    { id: 'S13', name: 'Lucas Chen', title: 'Support', image: 'src/assets/board/faculty.png' }
  ];

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
                <div key={member.id} className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] bg-gradient-to-br from-purple-600/40 to-indigo-700/40 border-2 border-purple-400 rounded-lg p-6 text-center shadow-lg shadow-purple-400/50 backdrop-blur-sm">
                  <img src={member.image} alt={member.name} className="w-40 h-40 rounded-lg mb-4 mx-auto" />
                  <div className="text-purple-100 text-base sm:text-lg font-semibold">{member.name}</div>
                  <div className="text-purple-200 text-sm mt-1">{member.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-purple-300 uppercase tracking-widest">
              Board & Leadership Module
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {boardMembers.map((member) => (
                <div
                  key={member.id}
                  className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[23%] bg-gradient-to-br from-indigo-800/40 to-purple-800/40 border-2 border-purple-500 rounded-lg py-5 px-0 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/50 backdrop-blur-sm "
                >
                  <img src={member.image} alt={member.name} className="w-40 h-40 rounded-lg mb-4 mx-auto" />
                  <div className="text-purple-100 text-base font-semibold truncate">{member.name}</div>
                  <div className="text-purple-200 text-sm mt-1 truncate">{member.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-purple-300 uppercase tracking-widest">
              Peripheral Modules - Senior Core
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {seniorCore.map((member) => (
                <div
                  key={member.id}
                  className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] bg-gradient-to-br from-violet-800/40 to-purple-900/40 border-2 border-violet-400 rounded-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-400/40 backdrop-blur-sm"
                >
                  <img src={member.image} alt={member.name} className="w-40 h-40 rounded-lg mb-4 mx-auto" />
                  <div className="text-purple-100 text-base font-semibold truncate">{member.name}</div>
                  <div className="text-purple-200 text-sm mt-1 truncate">{member.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
