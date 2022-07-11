import React, { Component } from 'react';

class Project extends Component{
    render(){


        return(
            <div>
                <div className="project-container">
                    <p className="pt-16 pl-56 text-3xl font-bold"><a href="#"><span className="text-cyan-300">Project</span></a> and <span>Study</span></p>
                    <p className="pl-56 pt-16 text-2xl font-bold">Project🛠️</p>
                    <div className="w-3/4 pt-10 mx-auto grid grid-cols-3 gap-10">
                        <a href="#" className="h-40 rounded-2xl bg-black">
                            <img className="h-40 mx-auto" src="/imgs/logoClab.png"></img>
                        </a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                    </div>
                    <div className="w-3/4 pt-4 pb-4 mx-auto grid grid-cols-3 gap-10 text-center">
                        <p className="text-xl font-semibold">C-Lab 홈페이지 개발</p>
                        <p className="text-xl font-semibold">프로젝트2</p>
                        <p className="text-xl font-semibold">프로젝트3</p>
                    </div>
                    <div className="w-3/4 mx-auto grid grid-cols-3 gap-10">
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                    </div>
                    <div className="w-3/4 pt-4 pb-4 mx-auto grid grid-cols-3 gap-10 text-center">
                        <p className="text-xl font-semibold">프로젝트4</p>
                        <p className="text-xl font-semibold">프로젝트5</p>
                        <p className="text-xl font-semibold">프로젝트6</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;