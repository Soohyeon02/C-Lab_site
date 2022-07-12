import React, { Component } from 'react';
import './Section.css';
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

        const { mode, persons } = this.state;

        return(
            <div>
                {/* 커뮤니티 메인 페이지 */}
                <section className="community-mainpage h-screen bg-gradient-to-r from-lime-500 to-green-500 content-center text-white rounded-md">
                    <div className="c-container mx-auto">
                        <h1 className="pt-96 align-middle text-center text-5xl font-bold text-white">C-Lab 동아리의 커뮤니티 공간입니다.<span className="animate-pulse">✨</span></h1>
                        <h1 className="pt-5 text-center text-3xl font-bold text-white"><span className="animate-pulse">✨</span>동아리 활동과 공지사항을 확인할 수 있습니다.</h1>
                    </div>
                </section>

                {/* 소개글 텍스트 */}
                <section className="Introduce-text">
                    <div className="c-container mx-auto">
                        <h1 className="text-center pt-80 text-5xl font-bold">C-Lab의 프로젝트를 소개합니다!🖐️</h1>
                        <h1 className="text-center pt-5 pb-64 text-3xl">현재 진행중인 작업물은 <span className="animate-pulse text-blue-600">{ projectNum }</span>개입니다.</h1>
                    </div>
                </section>

                {/* 스터디와 프로젝트 카드형식 구현 */}
                <section className="active-section">
                    <div className="c-container mx-auto">
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
                </section>

                {/* 공지사항 구현 */}
                <section className="notice-section mt-32">
                    <div className="c-container mx-auto">
                        <p className="pt-16 pl-56 text-3xl font-bold">공지사항</p>
                        <div className="flex flex-col items-center">
                            <div className="mt-16 rounded-lg w-3/4 bg-black h-24 text-white">
                                <span className="ml-4 mt-8 inline-block">1</span>
                                <span className="ml-4 mt-8 inline-block text-rose-500">[필독]</span>
                                <span className="ml-2 mt-8 inline-block">C-Lab 동아리 회원분들께 알립니다.</span>
                                <span className="float-right pr-4 inline-block pt-8">2022.07.12</span>
                                <span className="float-right pr-4 inline-block pt-8">황수현</span>
                            </div>
                            <div className="mt-16 rounded-lg w-3/4 bg-black h-24 text-white">
                            <span className="ml-4 mt-8 inline-block">2</span>
                                <span className="ml-4 mt-8 inline-block text-emerald-400">[공지]</span>
                                <span className="ml-2 mt-8 inline-block">C-Lab 홈페이지 개발을 완료하였습니다!</span>
                                <span className="float-right pr-4 inline-block pt-8">2022.07.12</span>
                                <span className="float-right pr-4 inline-block pt-8">황수현</span>
                            </div>
                            <div className="mt-16 rounded-lg w-3/4 bg-black h-24 text-white">
                            <span className="ml-4 mt-8 inline-block">3</span>
                                <span className="ml-4 mt-8 inline-block text-emerald-400">[공지]</span>
                                <span className="ml-2 mt-8 inline-block">보안 대회에서 대상을 수상하였습니다!</span>
                                <span className="float-right pr-4 inline-block pt-8">2022.07.12</span>
                                <span className="float-right pr-4 inline-block pt-8">황수현</span>
                            </div>
                            <div className="mt-16 rounded-lg w-3/4 bg-black h-24 text-white">
                            <span className="ml-4 mt-8 inline-block">4</span>
                                <span className="ml-4 mt-8 inline-block text-emerald-400">[공지]</span>
                                <span className="ml-2 mt-8 inline-block">동아리 MT 관련하여 알려드립니다.</span>
                                <span className="float-right pr-4 inline-block pt-8">2022.07.12</span>
                                <span className="float-right pr-4 inline-block pt-8">황수현</span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Section;