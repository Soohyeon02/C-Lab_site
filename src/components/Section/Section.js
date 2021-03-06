import React, { Component } from 'react';
import './Section.css';
class Section extends Component{
    state = {
        mode: 'Projectð ï¸',
        persons: [
            { title: 'C-Lab ííì´ì§ ê°ë°' },
            { title: 'íë¡ì í¸2'},
            { title: 'íë¡ì í¸3'},
            { title: 'íë¡ì í¸4'},
            { title: 'íë¡ì í¸5'},
            { title: 'íë¡ì í¸6'}
        ]
    }
    
    viewStudy = () => {
        this.setState({
            mode: 'Studyð',
            persons: [
                { title: 'ì¤í°ë1' },
                { title: 'ì¤í°ë2'},
                { title: 'ì¤í°ë3'},
                { title: 'ì¤í°ë4'},
                { title: 'ì¤í°ë5'},
                { title: 'ì¤í°ë6'}
            ]
        });
    }

    viewProject = () => {
        this.setState({
            mode: 'Projectð ï¸',
            persons: [
                { title: 'C-Lab ííì´ì§ ê°ë°' },
                { title: 'íë¡ì í¸2'},
                { title: 'íë¡ì í¸3'},
                { title: 'íë¡ì í¸4'},
                { title: 'íë¡ì í¸5'},
                { title: 'íë¡ì í¸6'}
            ]
        });
    }

    render(){

        let projectNum = 1;

        const { mode, persons } = this.state;

        return(
            <div>
                {/* ì»¤ë®¤ëí° ë©ì¸ íì´ì§ */}
                <section className="community-mainpage h-screen bg-gradient-to-r from-lime-500 to-green-500 content-center text-white rounded-md">
                    <div className="c-container mx-auto">
                        <h1 className="pt-96 align-middle text-center text-5xl font-bold text-white">C-Lab ëìë¦¬ì ì»¤ë®¤ëí° ê³µê°ìëë¤.<span className="animate-pulse">â¨</span></h1>
                        <h1 className="pt-5 text-center text-3xl font-bold text-white"><span className="animate-pulse">â¨</span>ëìë¦¬ íëê³¼ ê³µì§ì¬í­ì íì¸í  ì ììµëë¤.</h1>
                    </div>
                </section>

                {/* ìê°ê¸ íì¤í¸ */}
                <section className="Introduce-text">
                    <div className="c-container mx-auto">
                        <h1 className="text-center pt-80 text-5xl font-bold">C-Labì íë¡ì í¸ë¥¼ ìê°í©ëë¤!ðï¸</h1>
                        <h1 className="text-center pt-5 pb-64 text-3xl">íì¬ ì§íì¤ì¸ ììë¬¼ì <span className="animate-pulse text-blue-600">{ projectNum }</span>ê°ìëë¤.</h1>
                    </div>
                </section>

                {/* ì¤í°ëì íë¡ì í¸ ì¹´ëíì êµ¬í */}
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

                {/* ê³µì§ì¬í­ êµ¬í */}
                <section className="notice-section mt-32">
                    <div className="c-container mx-auto">
                        <p className="pt-16 pl-56 text-3xl font-bold">ê³µì§ì¬í­</p>
                        <div className="flex flex-col items-center">
                            <div className="mt-16 rounded-lg w-3/4 bg-black h-24 text-white">
                                <span className="ml-4 mt-8 inline-block">1</span>
                                <span className="ml-4 mt-8 inline-block text-rose-500">[íë]</span>
                                <span className="ml-2 mt-8 inline-block">C-Lab ëìë¦¬ íìë¶ë¤ê» ìë¦½ëë¤.</span>
                                <span className="float-right pr-4 inline-block pt-8">2022.07.12</span>
                                <span className="float-right pr-4 inline-block pt-8">í©ìí</span>
                            </div>
                            <div className="mt-16 rounded-lg w-3/4 bg-black h-24 text-white">
                            <span className="ml-4 mt-8 inline-block">2</span>
                                <span className="ml-4 mt-8 inline-block text-emerald-400">[ê³µì§]</span>
                                <span className="ml-2 mt-8 inline-block">C-Lab ííì´ì§ ê°ë°ì ìë£íììµëë¤!</span>
                                <span className="float-right pr-4 inline-block pt-8">2022.07.12</span>
                                <span className="float-right pr-4 inline-block pt-8">í©ìí</span>
                            </div>
                            <div className="mt-16 rounded-lg w-3/4 bg-black h-24 text-white">
                            <span className="ml-4 mt-8 inline-block">3</span>
                                <span className="ml-4 mt-8 inline-block text-emerald-400">[ê³µì§]</span>
                                <span className="ml-2 mt-8 inline-block">ë³´ì ëíìì ëìì ììíììµëë¤!</span>
                                <span className="float-right pr-4 inline-block pt-8">2022.07.12</span>
                                <span className="float-right pr-4 inline-block pt-8">í©ìí</span>
                            </div>
                            <div className="mt-16 rounded-lg w-3/4 bg-black h-24 text-white">
                            <span className="ml-4 mt-8 inline-block">4</span>
                                <span className="ml-4 mt-8 inline-block text-emerald-400">[ê³µì§]</span>
                                <span className="ml-2 mt-8 inline-block">ëìë¦¬ MT ê´ë ¨íì¬ ìë ¤ëë¦½ëë¤.</span>
                                <span className="float-right pr-4 inline-block pt-8">2022.07.12</span>
                                <span className="float-right pr-4 inline-block pt-8">í©ìí</span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Section;