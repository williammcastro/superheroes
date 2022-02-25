//no se requiere importar react
import { Routes, Route } from "react-router-dom";

import { AboutScreen } from '../AboutScreen'
import { DcScreen } from '../dc/DcScreen'
import { HeroScreen } from "../hero/HeroScreen";
import { MarvelScreen } from '../marvel/MarvelScreen'
import { SearchScreen } from '../search/SearchScreen'
import { Navbar } from '../ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="about" element={<AboutScreen />} />
                    
                    <Route path="hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}
