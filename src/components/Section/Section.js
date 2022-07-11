import React, { Component } from 'react';

class Section extends Component{
    state = {
        mode: 'Project🛠️',
        persons: [
            { title: 'C-Lab 홈페이지 개발' },
            { title: '프로젝트2'},
            { title: '프로젝트3'},
            { title: '프로젝트4'},
            { title: '프로젝트5'},
            { title: '프로젝트6'}
        ]
    }

    viewStudy = () => {
        this.setState({
            mode: 'Study📚',
            persons: [
                { title: '스터디1' },
                { title: '스터디2'},
                { title: '스터디3'},
                { title: '스터디4'},
                { title: '스터디5'},
                { title: '스터디6'}
            ]
        });
    }

    viewProject = () => {
        this.setState({
            mode: 'Project🛠️',
            persons: [
                { title: 'C-Lab 홈페이지 개발' },
                { title: '프로젝트2'},
                { title: '프로젝트3'},
                { title: '프로젝트4'},
                { title: '프로젝트5'},
                { title: '프로젝트6'}
            ]
        });
    }

    render(){

        let projectNum = 1;


        return(
            <div>
                <div className="community-main-page">
                    <div className="h-screen bg-gradient-to-r from-lime-500 to-green-500 content-center text-white">
                        <h1 className="pt-96 align-middle text-center text-5xl font-bold text-white">C-Lab 동아리의 활동 공간입니다.<span className="animate-pulse">✨</span></h1>
                        <h1 className="pt-5 text-center text-3xl font-bold text-white"><span className="animate-pulse">✨</span>여러 스터디와 프로젝트를 찾을 수 있습니다.</h1>
                    </div>
                </div>
                <div>
                    <h1 className="text-center pt-80 text-5xl font-bold">C-Lab의 프로젝트를 소개합니다!🖐️</h1>
                    <h1 className="text-center pt-5 pb-64 text-3xl">현재 진행중인 작업물은 <span className="animate-pulse text-blue-600">{ projectNum }</span>개입니다.</h1>
                </div>
                <div className="project-container">
                    <p className="pt-16 pl-56 text-3xl font-bold"><a onClick={ this.viewProject }><span className="text-cyan-300 hover:bg-lime-200 rounded-lg">Project</span></a> and <a onClick={ this.viewStudy }><span className="text-cyan-300 hover:bg-lime-200 rounded-lg">Study</span></a></p>
                    <p className="pl-56 pt-16 text-2xl font-bold">{ this.state.mode }</p>
                    <div className="w-3/4 pt-10 mx-auto grid grid-cols-3 gap-10">
                        <a href="#" className="h-40 rounded-2xl bg-black">
                            <img className="h-40 mx-auto" src="imgs/logoClab.png"></img>
                        </a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                    </div>
                    <div className="w-3/4 pt-4 pb-4 mx-auto grid grid-cols-3 gap-10 text-center">
                        <p className="text-xl font-semibold">{ this.state.persons[0].title }</p>
                        <p className="text-xl font-semibold">{ this.state.persons[1].title }</p>
                        <p className="text-xl font-semibold">{ this.state.persons[2].title }</p>
                    </div>
                    <div className="w-3/4 mx-auto grid grid-cols-3 gap-10">
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                        <a href="#" className="h-40 rounded-2xl bg-black"></a>
                    </div>
                    <div className="w-3/4 pt-4 pb-4 mx-auto grid grid-cols-3 gap-10 text-center">
                        <p className="text-xl font-semibold">{ this.state.persons[3].title }</p>
                        <p className="text-xl font-semibold">{ this.state.persons[4].title }</p>
                        <p className="text-xl font-semibold">{ this.state.persons[5].title }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;