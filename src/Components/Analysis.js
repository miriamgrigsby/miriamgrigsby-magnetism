import React from 'react'
import LinkButtons from './LinkButtons'
import A from './AnalysisComponents/Figure1Images/A.png'
import B from './AnalysisComponents/Figure1Images/B.png'
import C from './AnalysisComponents/Figure1Images/C.png'
import D from './AnalysisComponents/Figure1Images/D.png'
import E from './AnalysisComponents/Figure1Images/E.png'
import F from './AnalysisComponents/Figure1Images/F.png'
import Figure2 from './AnalysisComponents/Figure2Image/Figure2.png'
import Figure5 from './AnalysisComponents/Figure5Image/Figure5.png'
import A3 from './AnalysisComponents/Figure3Images/A3.png'
import B3 from './AnalysisComponents/Figure3Images/B3.png'
import C3 from './AnalysisComponents/Figure3Images/C3.png'
import D3 from './AnalysisComponents/Figure3Images/D3.png'
import E3 from './AnalysisComponents/Figure3Images/E3.png'
import F3 from './AnalysisComponents/Figure3Images/F3.png'
import H3 from './AnalysisComponents/Figure3Images/H3.png'
import I3 from './AnalysisComponents/Figure3Images/I3.png'
import J3 from './AnalysisComponents/Figure3Images/J3.png'
import K3 from './AnalysisComponents/Figure3Images/K3.png'


import A4 from './AnalysisComponents/Figure4Images/A4.png'
import B4 from './AnalysisComponents/Figure4Images/B4.png'
import C4 from './AnalysisComponents/Figure4Images/C4.png'
import D4 from './AnalysisComponents/Figure4Images/D4.png'
import E4 from './AnalysisComponents/Figure4Images/E4.png'
import F4 from './AnalysisComponents/Figure4Images/F4.png'
import G4 from './AnalysisComponents/Figure4Images/G4.png'
import A6 from './AnalysisComponents/Figure6Images/A6.png'
import B6 from './AnalysisComponents/Figure6Images/B6.png'
import A7 from './AnalysisComponents/Figure7Image/A7.png'

const Analysis = () => {
    return (
        <div>
            <LinkButtons />
            <div className="analysis-background"></div>
            <div className="analysis">
                <h1 className="analysis-intro">Magnetic Analysis of Tuyere Blow Pipes from the Limpopo River Valley</h1>
                <h2 className="analysis-intro">Miriam Grigsby, Kyrsten Johnston, et al.</h2>
                <section className="abstract">
                    <h2>Abstract</h2>
                    <p id="abstract-paragraph">
                    Samples of a tuyere from southern Africa have been tested to determine if the vitrified glass would be a strong magnetic recorder. Scanning electron microscopy (SEM), electron backscatter, alternative gradient field magnetometer (AGFM) tests, and first order reversal curves (FORCs) were used to investigate the samples’ compositions and magnetic properties. The samples were found to contain iron oxide crystals in a silica glass matrix, as well as what appeared to be the beginning stages of dendritic iron oxide crystals. Based on the tests, these samples have been found to be good magnetic indicators of mixed-domain composition, and the iron oxide more likely to be magnetite than hematite. Samples of a tuyere from southern Africa have been tested to determine if the vitrified glass would be a strong magnetic recorder. Scanning electron microscopy (SEM), electron backscatter, alternative gradient field magnetometer (AGFM) tests, and first order reversal curves (FORCs) were used to investigate the samples’ compositions and magnetic properties. The samples were found to contain iron oxide crystals in a silica glass matrix, as well as what appeared to be the beginning stages of dendritic iron oxide crystals. Based on the tests, these samples have been found to be good magnetic indicators of mixed-domain composition, and the iron oxide more likely to be magnetite than hematite. 
                    </p>
                </section>
                <section className="abstract">
                    <h2>Introduction</h2>
                        <p id="abstract-paragraph">
                        During the African Iron age, local tribes used smelting furnaces connected to long tubes known as tuyere in their iron making process. The tuyere pipes were made of a clay-like substance that when heated over time, formed a vitrified glass. Because the villages were located within the region of Africa that’s part of the South Atlantic Anomaly, the tuyere samples are of magnetic interest. 
                        
                        Glass has been shown to retain magnetic information in numerous other studies. Previous studies of vitrified glass from the Limpopo River Valley investigated vesicle rich glass found in kraals which are mixtures of cattle dung, grass, and wood (Tarduno et. al., 2015). The kraals and tuyere were both collected as in situ samples. The tuyere are an extension of the work previously done on glass samples from the Limpopo River valley. Samples are dated in several ways, namely archeology. There is a system of pottery styles used for dating through symbols and patterns. 
                       
                        Another such paper obtained the age of vitrified hill-forts from the Late Bronze/Second Iron age settlement of Misericordia (Serpa, Portugal)  through archaeomagnetic dating and pottery samples (Catanzariti et. al., 2007). Catanzariti’s work with glass establishes a basis for vitrified glass as a strong magnetic recorder. 
                        </p>
                </section>

                <section className="abstract">
                    <h2>Materials and Methods</h2>
                        <p id="abstract-paragraph">
                            <div id="figure1-div">
                                <div id="figure1-images">
                                    <img src={A} className="sized-figure1-images"></img>
                                    <img src={B} className="sized-figure1-images"></img>
                                    <img src={C} className="sized-figure1-images"></img>
                                    <img src={D} className="sized-figure1-images"></img>
                                    <img src={E} className="sized-figure1-images"></img>
                                    <img src={F} className="sized-figure1-images"></img>
                                </div>
                                <h3 id="title-figure1">Figure 1</h3>
                            </div>
                        </p>
                </section>

                <section className="abstract">
                        <p id="abstract-paragraph2">
                        The original tuyere sample had a thin glassy section on the outside ending in a knob (Fig. 1D), and another ring of glass on the inside of the tube (Fig. 1A). Two samples were taken, one from the knob (Fig. 1E) and another from the edge of the tube (Fig. 1B) The knob and tube samples were cut into thin sections for observation under the scanning electron microscope (Fig. 1C, F). Electron backscatter was also collected for these two samples. The regular SEM images can be used to study the surface of the sample by collecting electrons. thrown back at the machine. Electron backscatter is useful in determining composition, because it shows the sample in terms of density and can give percentages of elements in a specific area.

                    
                        </p>

                        <div id="figure2-div">
                            <div id="figure2-left">
                                <img src={Figure2} className="sized-figure2-image"></img>
                                <h3 id="title-figure2">Figure 2</h3>
                            </div>

                            <div id="figure2-right">
                                <p id="abstract-paragraph3">
                                From the knob and tube,  samples were taken and crushed for AGFM (Alternating Gradient Field Magnetometer) analysis (Fig. 2). Five hysteresis loops were collected from the knob and seven from the tube. We used information from the hysteresis data to locate the data point on a Day plot for each of the crush pieces. The hysteresis loops were used to tell how good of a magnetic recorder the glass was, while the Day plots can suggest what crystal domains exist within the material. Hysteresis loops can produce ambiguous results due to factors such as magnetic interactions, mineral composition, and grain size. Day plots have a similar problem. They plot ratios of Mrs/Ms (saturation remanent magnetization/saturation magnetization) vs. Hcr/Hc (coercivity or remanence/coercivity force) and bulk magnetic properties.
                                </p>
                                <p id="abstract-paragraph">
                                One of the crush pieces was also used to produce a FORC (First Order Reversal Curve) to better determine the composition of the iron oxide in the glass. These kinds of measurements are used to provide more detailed information about the sample. Distinct features such as thermal relaxation and domain state variations show up prominently in FORCs. FORC measurements are collected by first saturating the sample in a positive field, Ha. The field is then decreased to a reversal field, Hr. The FORC curve is the magnetization curve that results as the applied field is cranked back up to saturation. FORC data is then transformed into a FORC contour plot for further analysis. 

                                </p>
                            </div>
                        </div>

                </section>

                <section className="outer-figure3">
                <h2 id="results">Results</h2>
                        <div id="figure3-div">
                            <h2 id="title-figure2">SEM Tube</h2>
                            <div id="figure3-images">
                                <img src={A3} className="sized-figure3-images"></img>
                                <img src={B3} className="sized-figure3-images"></img>
                                <img src={C3} className="sized-figure3-images"></img>
                                <img src={D3} className="sized-figure3-images"></img>
                                <img src={E3} className="sized-figure3-images"></img>
                                <img src={F3} className="sized-figure3-images"></img>
                            </div>
                            <div id="figure3-images2">
                                <img src={H3} className="sized-figure3-images2"></img>
                                <img src={I3} className="sized-figure3-images2"></img>
                                <img src={J3} className="sized-figure3-images2"></img>
                                <img src={K3} className="sized-figure3-images2"></img>
                            </div>
                            <h3 id="title-figure2">Figure 3</h3>
                        </div>

                </section>
                

                <section className="abstract">
                        <p id="abstract-paragraph">
                        Our investigation focused on three areas, one with mostly light amber glass, one with a medium brown glass, and one with darker brown glass. In the amber section, no chemistry was taken, but a backscatter image revealed flecks of high-density grains within the matrix, similar to the other areas tested. In the medium brown glass, a cluster of high-density, star-shaped grains were found (Fig. 3A, C, E)and their chemistry had high peaks for oxygen, aluminum, iron, silicon, and smaller peaks at calcium, magnesium, and titanium (Fig. 3H). The surrounding glass, by comparison, had much smaller peaks of iron and aluminum and was mostly silicon and oxygen (Fig. 3J). In the dark brown glass (Fig. 3B), chemistry of the glass itself revealed peaks at silicon, oxygen, aluminum, and a small peak at iron (Fig. 3I). Also in this area, a grain was found that displayed characteristics of the beginning/formational stages of a dendrite (Fig. 3D, F). The grain’s chemistry had high peaks at oxygen and iron, with smaller peaks at aluminum, calcium, magnesium, and titanium, and had little silicon (Fig. 3K).
                        </p>
                </section>

                <section className="outer-figure4">
                        <div id="figure4-div">
                            <h2 id="title-figure2">Knob</h2>
                            <div id="figure4-images">
                                <img src={A4} className="sized-figure4-images"></img>
                                <img src={B4} className="sized-figure4-images"></img>
                                <img src={C4} className="sized-figure4-images"></img>
                                <img src={D4} className="sized-figure4-images"></img>
                            </div>
                            <div id="figure4-images2">
                                <img src={E4} className="sized-figure4-images2"></img>
                                <img src={F4} className="sized-figure4-images2"></img>
                                <img src={G4} className="sized-figure4-images2"></img>
                            </div>
                            <h3 id="title-figure2">Figure 4</h3>
                        </div>

                </section>


                <section className="abstract">
                    <p id="abstract-paragraph">
                    In the second sample, a backscatter image revealed a region with a lighter swirl through the darker matrix (Fig. 4A, B). When the composition of the matrix (Fig. 4E) was compared to that of the swirl (fig. 4F), they were found to be highly similar but with the swirl containing more iron and less silicon than the surrounding glass. Two grains from this area were also investigated, one a spindle (Fig. 4C) and one a collection of blobs (Fig. 4D). The chemistry of the blobby grain was not taken, but the spindle had peaks of oxygen, silicon, aluminum, iron, and a few small peaks of magnesium and calcium (Fig. 4G). 
                    </p>
                    <p id="abstract-paragraph">
                    After our initial examination under the SEM, we felt there needed to be further investigation of the dendrites. The matrix is composed of silica glass with a mixture of iron-oxide platelets and dendrites. Platelets is a term used to describe the blob like structures we are observing (Harizanova et al., 2011). In her work, Harizanova found that the platelets were mainly ferromagnetic, while the dendrites were paramagnetic. Our AGFM data also shows evidence of paramagnetic behavior. 
                    </p>
                    <p id="abstract-paragraph">
                    In order to better understand the iron-oxide dendrites we were observing, we conducted a literature search. We focused on the formation of iron-oxide dendrites and in what substances they are formed. Iron-oxide dendrites are formed within rapidly cooling melts that are saturated with respect to iron (Shaar, Feinberg, 2013). These dendrites often possess strong shape anisotropy, and therefore magnetic anisotropy. Magnetic anisotropy is the directional dependence of a material's magnetic properties. This means magnetic moment will tend to align with the easy axis or energetically favorable direction. Irregular shaped particles such as octapod magnetite, pure magnetite with inverse spinel structure, have strong shape anisotropy (Zhao et al 2013, Yu et al 2011). Spherical grains show no shape anisotropy (Tarling et al., 1993). Anisotropy can affect how good a grain is as a magnetic recorder. For example, when testing a grain with the AGFM, you may have to rotate the sample on the holder until the magnetization is strong enough to create a hysteresis loop. One paper puts forward that shape anisotropy can affect magnetic properties by increasing the coercivity (Tadic et al., 2011). 
                    </p>
                    <p id="abstract-paragraph">
                    Anisotropy is only one important component of iron-oxide dendrites. Reaction time was a common factor in several papers from the literature review. Zhao reported that reaction time controlled the size of the dendrites. The dendrite morphologies may also be affected by reaction time (Yu et al, 2011).  Yu worked with octahedral magnetites and noted that after a specific time period, namely 6 hours, the rectangular platelet structure, thought to be hematite, disappeared. Another paper also suggests that crystallization conditions and cooling rate impact the crystal shapes (Isobe et al., 2013). It is therefore possible that cooling rate could affect shape anisotropy and consequently the magnetic anisotropy. Other components may also affect dendrite growth such as the presence of NaCl or absence of KOH. It is important to also note the effect that impurities play in the formation of dendrites. Impurities can play an important role in determining the growth rate or reaction time (Berg et al., 1937). 
                    </p>
                </section>

                <section className="abstract">
                        <div id="figure2-div">
                            <div id="figure2-right">
                                <p id="abstract-paragraph">
                                Once we had a stronger understanding of how the iron-oxide dendrites may have formed, we looked into different structures and types of dendrites. Magnetite seems to be less well studied when it comes to classifying dendritic shapes. The octapod shape was the only concrete name we found directly referencing magnetite. Hematite, on the other hand, had a wide variety of dendrite shapes ranging from pine structures, flowers, to snowflake-like structures (Cao et al., 2005). The pine tree structure seems closely related to some of the dendrites we observed in our glass. The long dendrites show same crystal growth in every direction, and the crystallographic nature of dendrites. 
                                </p>
                                <p id="abstract-paragraph">
                                Shape is just one distinguishing factor of dendrite classification. There is also a distinction between thermal and saturation dendrites. Thermal dendrites are described as crystals whose growth is controlled primarily by the diffusion of heat and are rate dependent. Saturation dendrites are crystals whose growth is controlled by the diffusion of fresh material to growth fronts (Keith et al., 1962). Dendrites growing in a pure metal are thermal dendrites, whereas snowflakes are saturation dendrites. The distinction between these two types of dendrites is determined by the growth mechanism: heat vs. matter. Diffusion processes of each play a major role in the growth of any given dendrite. The Keith paper only furthers the idea that the formation of iron-oxide dendrites is rate dependent because our dendrites would be classified as thermal dendrites.
                                </p>
                            </div>
                            <div id="figure5-left">
                                <img src={Figure5} className="sized-figure5-image"></img>
                                <h3 id="title-figure2">Figure 5</h3>
                            </div>

                        </div>
                        <p id="abstract-paragraph3">
                        {/* The distinction between these two types of dendrites is determined by the growth mechanism: heat vs. matter. Diffusion processes of each play a major role in the growth of any given dendrite. The Keith paper only furthers the idea that the formation of iron-oxide dendrites is rate dependent because our dendrites would be classified as thermal dendrites.  */}
                        </p>

                        <p id="abstract-paragraph">
                        Further, the presence of dendrites in man-made glass has been documented in several papers on fly-ash. Fly-ash particles are microscopic, spherical particles formed during the firing of coal (Sokol et al., 2002). The particles can be either hollow or solid, but in both cases have been mostly found to be made of skeletal dendritic structures (Kutchko & Kim 2006, Ramsden & Shibaoka 1982, Sokol et al. 2002). In the paper by Sokol et al., it was determined that this dendritic structure is the result of rapid cooling.
                        </p>

                        <p id="abstract-paragraph">
                        Dendrites form in snowflakes, metals, ash, and synthetics. From the literature review, we believe that dendrites, especially iron-oxides, are dependent on growth rate, anisotropy, and impurities regardless of what material they form in. We found no specific evidence for the stages on iron-oxide dendrite formation. Flipping through the chapters of the “Oxide Minerals” book, we found a chapter written by Haggerty. The chapter contained images of titanomagnetite grains that were the closest match to what we were seeing in our tuyere glass. These images coupled with the chemistry we took of the dendrites and platelets leads us to believe we are dealing with titanomagnetite grains rather than true magnetite. 

                        </p>
                        
                </section>

                <section className="outer-figure6">
                        <div id="figure6-div">
                            <h2 id="title-figure2">AGFM</h2>
                            <div id="figure6-images">
                                <img src={A6} className="sized-figure6-images"></img>
                                <img src={B6} className="sized-figure6-images"></img>
                            </div>
                            <h3 id="title-figure2">Figure 6</h3>
                        </div>

                </section>

                <section className="abstract">
                        <p id="abstract-paragraph">
                        An alternating gradient field magnetometer (AGFM) allows for magnetic measurements of a sample, including the sample’s coercivity and magnetization. To do this, a sample is suspended between magnets that produce a field, and any minute changes in the position of the sample within the field are recorded. The data is used to create a hysteresis loop that plots magnetization over coercivity. The shape of the loop can be used to predict what crystal domains are present--single domain crystals are smaller and better magnetic recorders, while multi-domain crystals are larger and comparatively worse magnetic recorders. Mixed domain states can exist, as well as pseudo-single domain states, where the crystals behave like single domain but are not small enough to be truly single domain.

                        Our data was indicative of pseudo-single domain and mixed-domain crystals based on the loops’ shapes. Pseudo-single domain loops are skinny because the crystals are (not?) good magnetic recorders, while multi-domain loops are wasp-waisted, or skinnier near the origin and wider as it gets farther out. The example wasp-waisted hysteresis loop is from Tarduno & Myers, 1994.

                        </p>

                        <p id="abstract-paragraph">
                        Our data was indicative of pseudo-single domain and mixed-domain crystals based on the loops’ shapes. Pseudo-single domain loops are skinny because the crystals are (not?) good magnetic recorders, while multi-domain loops are wasp-waisted, or skinnier near the origin and wider as it gets farther out. The example wasp-waisted hysteresis loop is from Tarduno & Myers, 1994.

                        </p>
                </section>

                <section className="outer-figure7">
                        <div id="figure7-div">
                            <h2 id="title-figure2">Kappy Bridge</h2>
                            <div id="figure7-images">
                                <img src={A7} className="sized-figure7-images"></img>
                            </div>
                            <h3 id="title-figure2">Figure 7</h3>
                        </div>

                </section>

                <section className="abstract">
                        <p id="abstract-paragraph">
                        The kappabridge measures samples and plots the data points onto a susceptibility vs. temperature graph. Kappabridge also measures magnetic anisotropy. The sample is cooled in the presence of a field and then heated past the curie temperature. Specific slope changes at certain temperatures indicate different types of minerals present as the sample loses or gains magnetization. Different susceptibilities are measured as the sample is placed into 15 different positions. It is important for the heating and cooling curves to match as closely as possible. Our graph indicates that we are not dealing with a purely magnetite sample and that it is more likely titanomagnetite. Hematite is also present in our samples, which makes sense due to the red color of the mud that forms the tuyere.  

                        </p>
                </section>

                <section className="abstract">
                    <h2>Discussion</h2>
                    <p id="abstract-paragraph">
                    The iron and oxygen present in the grains from both the knob and the tube suggest that the grains are composed of an iron-oxide, most likely magnetite with some pigmentary hematite. However, the presence of titanium in some of the grains supports the kappabridge data in suggesting that the samples are not purely magnetite but rather titanomagnetite. The titanium in the sample would lower its Curie temperature from 580 degrees to a surprisingly wide range between room temperature and around 560 degrees. Because we notice some anisotropy and the presence of titanium, we conclude that the tuyere is not an ideal magnetic recorder. 
                    </p>
                </section>

                <br></br>
                <br></br>
                <br></br>

                <section className="outer-references-box">
                    <div id="references-box">
                        <h2 id="title-figure2">References</h2>
                        <h3 id="hanging-indent">
                        Ben-Jacob, E., Nigel Goldenfeld, J. S. Langer, and Gerd Schön. "Boundary-layer Model of	Pattern Formation in Solidification." Physical Review A29.1 (1984): 330-40. Web. 08 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Berg, W. F. "Crystal Growth from Solutions." Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences 164.916 (1938): 79-95. Web. 01 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Bergman, Michael I., David M. Cole, and Jackson R. Jones. "Measurements of Electric	Anisotropy Due to Solidification Texturing and the Implications for the Earth's Inner Core." Nature 389.6646 (1997): 60. Web. 14 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Cao, Minhua, Tianfu Liu, Song Gao, Genban Sun, Xinglong Wu, Changwen Hu, and Zhong Lin Wang. "Single-Crystal Dendritic Micro-Pines of Magnetic α-Fe2O3: Large-Scale	Synthesis, Formation Mechanism, and Properties." Angewandte Chemie 117.27 (2005): 4269-273. Web. 14 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Catanzariti, Gianluca, Gregg Mcintosh, António M. Monge Soares, Enrique Díaz-Martínez, Peter Kresten, and M.L. Osete. "Archaeomagnetic Dating of a Vitrified Wall at the Late Bronze Age Settlement of Misericordia (Serpa, Portugal)." Journal of Archaeological Science 35.5 (2008): 1399-407. Web. 25 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Cody, A.m., and R.d. Cody. "Dendrite Formation by Apparent Repeated Twinning of Calcium Oxalate Dihydrate." Journal of Crystal Growth151.3-4 (1995): 369-74. Web. 31 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Fowler, Anthony D. "A Model and Simulation of Branching Mineral Growth from Cooling	Contacts and Glasses." Mineralogical Magazine 60.4 (1996): 595-601. Web. 31 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        French, J. E. "Dendritic Zircon Formation by Deterministic Volume-filling Fractal Growth: Implications for the Mechanisms of Branch Formation in Dendrites." American Mineralogist 95.5-6 (2010): 706-16. Web. 25 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Gonda, T., and S. Nakahara. "Dendritic Ice Crystals with Faceted Tip Growing from the Vapor	Phase." Research of Pattern Formation 173.1-2 (1997): 189-93. Web. 25 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Gulyaeva, R.i., E.n. Selivanov, and N.i. Selmenskikh. "Crystallization of Oxide High Iron Melts." EPJ Web of Conferences 15 (2011): 01010. Web. 05 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Harizanova, Ruzha, Günter Völksch, and Christian Rüssel. "Crystallization and Microstructure of Glasses in the System Na2O/MnO/SiO2/Fe2O3."Materials Research Bulletin 46.1	(2011): 81-86. Web. 25 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Isobe, Hiroshi, and Takaaki Gondo. "Dendritic Magnetite Crystals in Rapid Quenched Fine	Spherules Produced by Falling Experiments through the High Temperature Furnace with Controlled Gas Flow." Journal of Mineralogical and Petrological Sciences 108.4 (2013):	227-37. Web. 25 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Jordanova, Diana, Viktor Hoffmann, and Karl Thomas Fehr. "Mineral Magnetic Characterization	of Anthropogenic Magnetic Phases in the Danube River Sediments (Bulgarian Part)☆."	Earth and Planetary Science Letters 221.1-4 (2004): 71-89. Web. 01 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Keith, H. D., and F. J. Padden. "A Phenomenological Theory of Spherulitic Crystallization." J. Appl. Phys. Journal of Applied Physics 34.8 (1963): 2409. Web. 14 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Kutchko, B., and A. Kim. "Fly Ash Characterization by SEM–EDS." Fuel85.17-18 (2006): 2537-544. Web. 14 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Lindsley, Donald H. Oxide Minerals: Petrologic and Magnetic Significance. Vol. 5. Washington, D.C.: Mineralogical Society of America, 1991. Print.
                        </h3>
                        <h3 id="hanging-indent">
                        Ramsden, A.r., and M. Shibaoka. "Characterization and Analysis of Individual Fly-ash Particles from Coal-fired Power Stations by a Combination of Optical Microscopy, Electron Microscopy and Quantitative Electron Microprobe Analysis." Atmospheric Environment (1967) 16.9 (1982): 2191-206. Web. 01 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Sangwal, Keshra. "Effects of Impurities on Crystal Growth Processes."Progress in Crystal Growth and Characterization of Materials 32.1-3 (1996): 3-43. Web. 25 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Shaar, Ron, and Joshua M. Feinberg. "Rock Magnetic Properties of Dendrites: Insights from MFM Imaging and Implications for Paleomagnetic Studies." Geochemistry, Geophysics, Geosystems 14.2 (2013): 407-21 Web. 1 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Sokol, E.v, V.m Kalugin, E.n Nigmatulina, N.i Volkova, A.e Frenkel, and N.v Maksimova. "Ferrospheres from Fly Ashes of Chelyabinsk Coals: Chemical Composition, Morphology and Formation Conditions." Fuel81.7 (2002): 867-76. Web. 14 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Tadić, Marin, Nada Čitaković, Matjaž Panjan, Zoran Stojanović, Dragana Marković, and Vojislav Spasojević. "Synthesis, Morphology, Microstructure and Magnetic Properties of Hematite Submicron Particles." Journal of Alloys and Compounds 509.28 (2011): 7639-644. Web. 25 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Tarduno, John A., Michael K. Watkeys, Thomas N. Huffman, Rory D. Cottrell, Eric G. Blackman, Anna Wendt, Cecilia A. Scribner, and Courtney L. Wagner. "Antiquity of the	South Atlantic Anomaly and Evidence for Top-down Control on the Geodynamo."	Nature Communications 6 (2015): 7865. Web. 13 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Tarling, D., and F. Hrouda. "Magnetic Anisotropy." Springer Science and Media Reference (1993): n. pag. Print.
                        </h3>
                        <h3 id="hanging-indent">
                        Welsch, B., F. Faure, V. Famin, A. Baronnet, and P. Bachelery. "Dendritic Crystallization: A Single Process for All the Textures of Olivine in Basalts?" Journal of Petrology 54.3 (2012): 539-74. Web. 25 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Woltz, S., R. Hiergeist, P. Görnert, and C. Rüssel. "Magnetite Nanoparticles Prepared by the Glass Crystallization Method and Their Physical Properties." Journal of Magnetism and Magnetic Materials 298.1 (2006): 7-13. Web. 01 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Wu, Hongjing, and Liuding Wang. "Phase Transformation-induced Crystal Plane Effect of Iron Oxide Micropine Dendrites on Gaseous Toluene Photocatalytic Oxidation." Applied Surface Science 288 (2014): 398-404. Web. 01 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Yu, Xuegang, Yan Shan, Bin Du, and Kezheng Chen. "One-pot and Template-free Fabrication of Dendritic and Octahedral Single-crystal Magnetites." CrystEngComm 13.5 (2011): 1525-530. Web. 01 Apr. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Zhang, Tongbao, Yangcheng Lu, and Guangsheng Luo. "Synthesis of Single-crystal Dendritic Iron Hydroxyl Phosphate as a Fenton Catalyst."CrystEngComm 15.44 (2013): 9104. Web. 25 Mar. 2016.
                        </h3>
                        <h3 id="hanging-indent">
                        Zhao, Zhenghuan, Zijian Zhou, Jianfeng Bao, Zhenyu Wang, Juan Hu, Xiaoqin Chi, Kaiyuan Ni, Ruifang Wang, Xiaoyuan Chen, Zhong Chen, and Jinhao Gao. "Octapod Iron Oxide Nanoparticles as High-performance T2 Contrast Agents for Magnetic Resonance Imaging."Nature Communications 4 (2013): 2266. Web. 25 Mar. 2016.
                        </h3>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Analysis
