import { NotebookData } from "@/types/notebook";


export const softwareProjectsData: NotebookData[] = [
  {
    image: '/images/projects/mapper/mapper1.png',
    title: 'Map App',
    description: 'A mapping application made with C++, OpenStreetMap, and GTK',
    githubLink: '',
    descriptionFull: (
      <>
        Proposed and implemented a complete mapper software using C++, OpenStreetMap (OSM), and gtk in a team of 3.<br></br><br></br>
        Conducted State of the Art Reviews on current GIS software to discover relevant features to include. <br></br><br></br>
        Used Git to manage the project and communicate updates to teammate and created an associated business pitch with the app.
        <br></br><br></br>
        Due to academic integrity reasons, this project cannot be uploaded to a public github repo.
      </>
    ),
    src: '',
    images: ['/images/projects/mapper/mapper1.png', '/images/projects/mapper/mapper2.png']
  },
  {
    image: '/images/projects/p-classifier/main.png',
    title: 'AI Pokémon Classifier',
    description: 'An AI CNN model to classify Pokémon types, made with Python, using Pytorch and Colab',
    githubLink: 'https://github.com/RohanrPatel/APS360Project',
    descriptionFull: (
      <>
        Created a Convolutional Neural Network (CNN) to classify Pokémon types in Google Colab with a team of 4, using Python with the Pytorch library. <br></br><br></br>
        Involved consolidating and cleaning image and sprite data from many sources like Kaggle and Github. Then processing images through 
        transformations and data augmentation. <br></br><br></br>
        Created training, validation, testing datasets and loaders to feed into our own model which used embeddings from GoogLeNet.<br></br><br></br>
        The Project also used many popular Python librarys like numpy, scipy, and pandas.
      </>
    ),
    src: '',
    images: ['/images/projects/p-classifier/code.png', '/images/projects/p-classifier/main.png']
  },
  {
    image: '/images/projects/skulejazz/home.png',
    title: 'Jazz.skule.ca',
    description: 'A website made for the UofT Jazz band, using React and Typescript',
    githubLink: 'https://github.com/Sidd-T/UofT-Stageband-Website',
    descriptionFull: (
      <>
        Created a website for the University of Toronto band. Used NextJS with TypeScript & React to create a site to display
        info about the band, events, a gallery of past media, and audition signups <br></br><br></br>
        Deployed with Vercel using a Postgres database on Neon.
      </>
    ),
    src: 'https://jazz.skule.ca/',
    images: ['/images/projects/skulejazz/home.png', '/images/projects/skulejazz/gallery.png']
  },
  {
    image: '/images/projects/ktane/main.png',
    title: 'Keep Talking and Nobody Explodes Equalizer Mod',
    description: 'Created a Mod for the game Keep Talking and Nobody Explodes (KTANE) in Unity',
    githubLink: 'https://github.com/Sidd-T/KTANE-Equalizer',
    descriptionFull: (
      <>
        Created, implemented, and published a mod for the game “Keep Talking and Nobody Explodes”. <br></br><br></br>
        Involved creating a module on Unity, and using C# scripts to implement the module on the base game. Also created a “manual page” with HTML, 
        using CSS files given with the game for style and formatting.
      </>
    ),
    src: '',
    images: ['/images/projects/ktane/main.png', '/images/projects/ktane/module.png', '/images/projects/ktane/solved.png', '/images/projects/ktane/manual.png', '/images/projects/ktane/manual2.png', '/images/projects/ktane/manual3.png']
  },
];

export const hardwareProjectsData: NotebookData[] = [
  {
    image: '/images/projects/synth/main.jpg',
    title: 'DIY Analog Synthesizer',
    description: 'Created an budget analog syntheziser with 3 wave options, ADSR, and filtering',
    githubLink: 'https://github.com/Sidd-T/AnalogSynthesizer',
    descriptionFull: (
      <>
        Created an analog synthesizer from scratch. Used LTSpice for circuit simulation and built on breadboards with RC circuits and OpAmps <br></br><br></br>
        The Design consisted of 5 modules, a MIDI-CV Converter, made with an Arduino, and then 4 analog modules, a Voltage Controlled Oscillator (VCO), 
        Voltage Controlled Filter (VCF), Attack Decay Sustain Release (ADSR), and Voltage Controlled Amplifier (VCA).<br></br><br></br>
        Each module contributes to the core functionality of a basic synth; however, the cost of this project was kept to ~$120 for all components, 
        which is around a 400% cost save to current synths on the market <br></br><br></br>
        Check out the webpage with the specific and thorough details and explanation on how the synth works, 
        and how to specifically make it yourself, with links to Digikey for specific components. Also check out the Github for an LTSpice file for the entire synth.
      </>
    ),
    src: '/analog-synth',
    images: ['/images/projects/synth/main.jpg', '/images/projects/synth/alternate1.jpg', '/images/projects/synth/alternate2.jpg', '/images/projects/synth/topdown.jpg'],
    menuID: 1,
  },

];