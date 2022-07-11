import React, { Component } from 'react';

class Study extends Component{
    render(){

        var projectNum = 1;



        return(
            <div>
                <div className="project-container">
                    <p className="pt-16 pl-56 text-3xl font-bold"><a href="#"><span className="text-cyan-300">Project</span></a> and <span>Study</span></p>
                    <p className="pl-56 pt-16 text-2xl font-bold">Study📚</p>
                    <div className="w-3/4 pt-10 mx-auto grid grid-cols-3 gap-10">
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                    </div>
                    <div className="w-3/4 pt-4 pb-4 mx-auto grid grid-cols-3 gap-10 text-center">
                        <p className="text-xl font-semibold">스터디1</p>
                        <p className="text-xl font-semibold">스터디2</p>
                        <p className="text-xl font-semibold">스터디3</p>
                    </div>
                    <div className="w-3/4 mx-auto grid grid-cols-3 gap-10">
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                    </div>
                    <div className="w-3/4 pt-4 pb-4 mx-auto grid grid-cols-3 gap-10 text-center">
                        <p className="text-xl font-semibold">스터디4</p>
                        <p className="text-xl font-semibold">스터디5</p>
                        <p className="text-xl font-semibold">스터디6</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Study;