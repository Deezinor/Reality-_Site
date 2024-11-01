import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ContactForm from "../../components/contact-form";

const Services: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="hero hero__services container"></section>

        <section className="[ service-tiles ] [ section clr-neutral-900 ]">
          <h2 className="[ section-header ] [ fs-900 text-center uppercase ]">
            End-to-end service
          </h2>
          <div className="container">
            <div className="grid-layout" data-type="services">
              <div className="service-tile">
                <img
                  src="../../Assets/Unity.svg"
                  alt="Unity Logo in Grey"
                />
                <h2>C# Unity Development</h2>
                <p>Service Description</p>
              </div>
              <div className="service-tile">
                <img
                  src="/Assets/unreal-1.svg"
                  alt="Unreal engine logo in black"
                />
                <h2>Unreal Engine Development</h2>
                <p>Service Description</p>
              </div>
              <div className="service-tile">
                <svg
                  enable-background="new 0 0 32 32"
                  height="60px"
                  width="60px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 32 32"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path d="M13,2C6.935,2,2,6.935,2,13s4.935,11,11,11s11-4.935,11-11S19.065,2,13,2z M13,22c-4.962,0-9-4.037-9-9   c0-4.962,4.038-9,9-9c4.963,0,9,4.038,9,9C22,17.963,17.963,22,13,22z" />
                    <path d="M29.707,28.293l-6.001-6c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l6.001,6C28.488,29.902,28.744,30,29,30   s0.512-0.098,0.707-0.293C30.098,29.316,30.098,28.684,29.707,28.293z" />
                  </g>
                </svg>
                <h2>Research & Development</h2>
                <p>Service Description</p>
              </div>
              <div className="service-tile">
                <svg
                  height="50px"
                  version="1.1"
                  viewBox="0 0 50 50"
                  width="50px"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="unreal-icon"
                >
                  <title />
                  <desc />
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    id="unreal_squircle"
                    stroke="none"
                    stroke-width="1"
                  >
                    <path
                      d="M6,0 L44,0 C47.3137085,0 50,2.6862915 50,6 L50,44 C50,47.3137085 47.3137085,50 44,50 L6,50 C2.6862915,50 0,47.3137085 0,44 L0,6 C0,2.6862915 2.6862915,0 6,0 Z"
                      fill="#000"
                      id="Background"
                    />
                    <g
                      fill="#FFFFFF"
                      id="unreal"
                      transform="translate(3.000000, 3.000000)"
                    >
                      <path
                        d="M21.0032636,9.1 C18.1066109,11.5123613 18.1276011,13.5771791 18.7573082,14.6402536 C19.3870153,15.7033281 20.1846444,15.0491284 20.1846444,15.0491284 L20.1846444,28.1740095 C20.6254393,28.7259905 21.0872245,29.2779715 22.7034728,29.2779715 C23.3961506,29.2779715 24.4666527,28.7464342 25.4741841,27.744691 C25.4741841,26.7020602 25.4951743,17.6659271 25.4741841,16.5824089 C25.4531939,15.4988906 23.9838773,14.3131537 23.9838773,14.3131537 C23.9838773,14.3131537 25.8520084,14.3335975 26.523696,15.0491284 C28.8955927,12.0643423 33.4084937,10.6128368 34.6888982,10.3879556 C34.1851325,10.6128368 30.952636,15.3353407 30.952636,15.3353407 L30.952636,27.8264659 C32.2120502,29.8912837 34.6259275,26.9473851 36.62,25.6798732 C34.4789958,30.6681458 29.0425244,34.1026941 29.0425244,34.1026941 L26.0199303,31.6085578 C26.0199303,31.6085578 24.2147699,33.5507132 22.8294142,34.9 C16.7632357,34.3071315 13.4047978,31.3836767 12.7541004,30.1979398 C14.9370851,30.7499208 15.021046,29.3597464 15.021046,29.3597464 L15.021046,19.0969889 C13.5937099,14.8038035 7.50654114,23.8194929 6.52,25.4549921 C6.52,23.0017433 7.0867364,19.7103011 11.5576569,15.0900158 C16.0285774,10.4697306 21.0032636,9.1 21.0032636,9.1 Z M22,1.52186312 C10.7186312,1.52186312 1.52186312,10.6981939 1.52186312,22 C1.52186312,33.3018061 10.7186312,42.4781369 22,42.4781369 C33.2813688,42.4781369 42.4781369,33.2813688 42.4781369,22 C42.4781369,10.7186312 33.3018061,1.52186312 22,1.52186312 Z M22,0.5 C33.8944867,0.5 43.5,10.1259506 43.5,22 C43.5,33.8740494 33.8740494,43.5 22,43.5 C10.1259506,43.5 0.5,33.8740494 0.5,22 C0.5,10.1259506 10.1259506,0.5 22,0.5 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </svg>
                <h2>User-centered Design</h2>
                <p>Service Description</p>
              </div>
              <div className="service-tile">
                <svg
                  height="60px"
                  width="60px"
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g id="_x36_69_x2C__drag_x2C__mobile_x2C__design_x2C__ui_x2C__ux">
                    <g>
                      <path
                        d="M128.971,380.536v49.381c0,4.025,1.621,7.721,4.204,10.394l0.181,0.181    c2.734,2.704,6.458,4.415,10.604,4.415h211.495c4.115,0,7.87-1.711,10.574-4.415c2.732-2.704,4.414-6.458,4.414-10.574v-49.381    H128.971z M128.971,105.752v34.752h96.09c2.042,0,3.696,1.653,3.696,3.695v77.857c0,2.042-1.653,3.695-3.696,3.695h-96.09v147.395    h241.472v-11.506h-65.151c-2.043,0-3.694-1.65-3.694-3.693v-78.579c0-2.042,1.651-3.694,3.694-3.694h25.151V105.752H128.971z     M355.455,48.289H143.96h-0.21l0,0h-0.181l0,0h-0.181l-0.03,0.029h-0.149h-0.03h-0.181l0,0l-0.181,0.029h-0.03h-0.151h-0.03    l-0.149,0.03h-0.03h-0.151h-0.06l-0.121,0.032h-0.06l-0.12,0.029h-0.062l-0.149,0.029h-0.03l-0.121,0.03h-0.06l-0.12,0.03h-0.062    l-0.149,0.029h-0.062l-0.089,0.029h-0.089l-0.091,0.03l-0.089,0.032h-0.09l-0.091,0.029l-0.089,0.029h-0.089l-0.091,0.03    l-0.089,0.03l-0.09,0.029l-0.091,0.03h-0.09l-0.06,0.03l-0.091,0.029l-0.089,0.031l-0.089,0.03l-0.091,0.03h-0.09l-0.091,0.059    h-0.09l-0.089,0.061h-0.06l-0.272,0.121h-0.089l-0.09,0.059h-0.06l-0.121,0.061l-0.151,0.06l-0.06,0.031l-0.119,0.06l-0.181,0.061    h-0.03l-0.121,0.059l-0.179,0.092h-0.03c-4.117,1.951-7,5.525-8.141,9.852l-0.061,0.18l0,0l-0.03,0.151v0.03l-0.06,0.179    l-0.03,0.181l-0.03,0.181l-0.03,0.181l-0.03,0.18l-0.03,0.18l0,0l-0.032,0.182l-0.03,0.179l-0.03,0.21l-0.03,0.182v0.18    l-0.03,0.18v0.211v0.18l-0.03,0.182v0.209v0.18v0.211v35.084h241.472V63.277v-0.211v-0.18v-0.209l-0.029-0.182v-0.18v-0.211    l-0.029-0.18l-0.032-0.18v-0.182l-0.03-0.21l-0.029-0.179l-0.029-0.182l0,0l-0.03-0.18l-0.03-0.18l-0.029-0.181l-0.029-0.181    l-0.03-0.181l-0.062-0.179v-0.03l-0.029-0.151l0,0l-0.061-0.18l-0.029-0.18l-0.061-0.181l0,0l-0.061-0.181l-0.061-0.18l0,0    l-0.029-0.18l0,0c-1.412-3.936-3.755-6.76-7.449-8.711l0,0l-0.15-0.092h-0.029l-0.301-0.148l0,0l-0.181-0.092l0,0l-0.149-0.059    l0,0l-0.51-0.211l0,0l-0.362-0.119l0,0l-0.329-0.121v-0.03l-0.182-0.03l-0.359-0.119l0,0l-0.15-0.061h-0.03l-0.151-0.03    l-0.179-0.06l-0.181-0.061l0,0l-0.359-0.059l-0.182-0.063l-0.21-0.029l-0.181-0.029l-0.18-0.03l-0.18-0.03l0,0l-0.182-0.029    l-0.179-0.029l-0.21-0.032h-0.182l-0.18-0.03h-0.18l-0.211-0.029h-0.18l0,0h-0.182l-0.209-0.029h-0.18H255.455z M221.397,218.362    v-70.469c-48.031,0-96.031,0-144.032,0v70.469C125.367,218.362,173.366,218.362,221.397,218.362z M308.987,283.063v71.188    c24.78,0,49.591,0,74.403,0l-10.213-29.977h-0.031v-0.061v-0.03l-0.03-0.03l0,0v-0.06l0,0l-0.03-0.03v-0.059l0,0v-0.032    l-0.029-0.03v-0.029v-0.029v-0.03v-0.03l-0.029-0.029l0,0v-0.029v-0.063l0,0v-0.029v-0.029l-0.03-0.03l0,0v-0.03v-0.06l0,0v-0.03    v-0.031v-0.029l0,0v-0.03v-0.03l-0.03-0.029l0,0v-0.029v-0.03v-0.03v-0.029v-0.031v-0.03l0,0v-0.03v-0.059v-0.03v-0.03v-0.029l0,0    v-0.062v-0.03l0,0v-0.029v-0.061l0,0v-0.029l0.03-0.029v-0.03l0,0v-0.062v-0.029l0,0v-0.03v-0.06l0,0l0.03-0.029v-0.03v-0.032l0,0    v-0.059l0,0v-0.03l0.029-0.03v-0.029v-0.03v-0.03l0.029-0.029l0,0v-0.031v-0.061l0,0l0.03-0.029l0,0v-0.029v-0.03l0,0l0.03-0.06    v-0.031l0,0l0.031-0.03v-0.03v-0.029l0.029-0.06l0,0l0.03-0.09l0,0l0.03-0.091h0.029l0.03-0.09l0.03-0.06v-0.032l0.029-0.059    l0.031-0.03l0.03-0.03v-0.029l0.03-0.06l0.029-0.03l0.029-0.031v-0.06l0.03-0.03l0.03-0.029l0.029-0.03l0.029-0.06l0.032-0.062    l0.03-0.03l0.029-0.029l0.029-0.029l0.03-0.061l0.03-0.029l0.029-0.029l0.03-0.032l0.031-0.03l0.03-0.029l0.029-0.029l0.03-0.03    l0.03-0.06h0.029l0.029-0.062l0.03-0.03l0.03-0.029l0.091-0.061h0.03l0.029-0.029l0.029-0.029l0.03-0.03l0.211-0.181h0.06    l0.029-0.029l0.032-0.03l0.03-0.03l0.059-0.031h0.03l0.3-0.148l0.03-0.03l0.302-0.121l0.09-0.03h0.029l0.15-0.029v-0.03h0.03h0.06    l0.061-0.03h0.029l0,0h0.062l0.06-0.029h0.029h0.03h0.03h0.029l0,0h0.06l0.032-0.029l0,0h0.029h0.029h0.03h0.03h0.029h0.03l0,0    h0.062h0.029l0,0h0.029h0.182h0.06l0,0h0.03h0.029h0.029l0,0h0.061l0,0h0.029l0,0h0.031h0.03h0.03h0.029l0.029,0.029h0.03l0,0    h0.03h0.061l0,0h0.03h0.03l0.029,0.029h0.061h0.029h0.029l0.03,0.03h0.032h0.059l0.03,0.03h0.03h0.029l0.029,0.029h0.03h0.062    l0.029,0.03l0,0h0.03l0.03,0.03h0.029l17.783,6.248v-42.804C366.778,283.063,337.883,283.063,308.987,283.063z M256.812,405.466    c-1.802-1.802-4.325-2.913-7.119-2.913c-2.764,0-5.287,1.111-7.089,2.913c-1.802,1.834-2.945,4.357-2.945,7.119    c0,2.704,1.053,5.138,2.764,6.94l0.181,0.148c1.802,1.832,4.325,2.945,7.089,2.945c2.794,0,5.317-1.113,7.119-2.945    c1.802-1.802,2.942-4.325,2.942-7.089C259.754,409.823,258.613,407.3,256.812,405.466z M249.692,395.164    c4.807,0,9.161,1.953,12.314,5.106c3.186,3.123,5.137,7.51,5.137,12.314c0,4.807-1.951,9.191-5.106,12.316    c-3.153,3.153-7.508,5.106-12.345,5.106c-4.806,0-9.161-1.953-12.316-5.106l-0.24-0.24c-3.002-3.155-4.866-7.389-4.866-12.076    c0-4.805,1.953-9.191,5.106-12.314C240.531,397.117,244.886,395.164,249.692,395.164z M349.897,147.533h-59.654v71.189h59.654    V147.533z M204.155,249.48c1.381,0,2.853-0.901,3.304-2.072c1.232-2.463-0.631-5.287-3.304-5.287h-7.39    c-1.381,0-2.853,0.902-3.304,2.072c-1.231,2.465,0.63,5.287,3.304,5.287H204.155z M233.682,249.48    c1.381,0,2.854-0.901,3.304-2.072c1.232-2.463-0.632-5.287-3.304-5.287h-7.389c-1.383,0-2.853,0.902-3.304,2.072    c-1.232,2.465,0.63,5.287,3.304,5.287H233.682z M263.18,249.48c1.41,0,2.853-0.901,3.334-2.072    c1.231-2.463-0.662-5.287-3.334-5.287h-7.359c-1.413,0-2.854,0.902-3.334,2.072c-1.232,2.465,0.66,5.287,3.334,5.287H263.18z     M280.241,262.969c1.11,5.557,8.14,3.152,7.359-0.812c0-2.434-1.532-6.219-2.645-8.351c-2.702-4.506-8.771-0.33-6.487,3.515    C279.22,258.583,280.241,261.496,280.241,262.969z M280.33,292.074c0,1.383,0.902,2.854,2.072,3.305    c2.464,1.231,5.317-0.631,5.317-3.305v-7.389c0-1.382-0.9-2.854-2.072-3.305c-2.464-1.232-5.317,0.631-5.317,3.305V292.074z     M280.33,321.602c0,1.383,0.902,2.854,2.072,3.304c2.464,1.231,5.317-0.63,5.317-3.304v-7.39c0-1.381-0.9-2.853-2.072-3.304    c-2.464-1.232-5.317,0.631-5.317,3.304V321.602z M274.292,345.781c-1.562,1.173-1.951,3.605-0.72,5.137    c1.261,1.683,3.575,1.953,5.196,0.751c2.432-1.892,4.266-3.904,5.857-6.579c1.532-2.582-0.781-6.065-3.785-5.465    c-1.141,0.21-1.982,0.721-2.612,1.802C277.478,342.929,275.646,344.73,274.292,345.781z M247.829,348.816    c-1.381,0-2.854,0.901-3.304,2.072c-1.23,2.463,0.632,5.287,3.304,5.287h7.389c1.383,0,2.855-0.902,3.304-2.073    c1.231-2.464-0.63-5.286-3.304-5.286H247.829z M218.304,348.816c-1.383,0-2.855,0.901-3.304,2.072    c-1.232,2.463,0.63,5.287,3.304,5.287h7.389c1.381,0,2.853-0.902,3.304-2.073c1.23-2.464-0.632-5.286-3.304-5.286H218.304z     M188.776,348.816c-1.383,0-2.855,0.901-3.304,2.072c-1.232,2.463,0.63,5.287,3.304,5.287h7.389c1.381,0,2.854-0.902,3.334-2.073    c1.2-2.464-0.661-5.286-3.334-5.286H188.776z M161.021,347.435c-4.866-1.923-7.21,5.077-3.004,6.758    c3.004,1.202,5.196,1.862,8.5,1.983c5.197,0,4.806-7.39,0.27-7.39C164.505,348.727,163.064,348.275,161.021,347.435z     M152.19,325.687c0-1.411-0.902-2.854-2.072-3.334c-2.464-1.231-5.317,0.661-5.317,3.334v7.39c0,1.383,0.9,2.822,2.072,3.304    c2.463,1.231,5.317-0.63,5.317-3.304V325.687z M152.19,296.159c0-1.381-0.902-2.853-2.072-3.304    c-2.464-1.232-5.317,0.631-5.317,3.304v7.39c0,1.383,0.9,2.854,2.072,3.304c2.463,1.231,5.317-0.63,5.317-3.304V296.159z     M152.19,266.632c0-1.381-0.902-2.853-2.072-3.304c-2.464-1.23-5.317,0.631-5.317,3.304v7.39c0,1.383,0.9,2.855,2.072,3.305    c2.463,1.23,5.317-0.631,5.317-3.305V266.632z M167.239,242.121c-0.33,0-0.691,0.061-1.051,0.151    c-0.421-0.091-0.87-0.121-1.351-0.03c-2.404,0-6.189,1.501-8.351,2.613c-4.506,2.734-0.3,8.801,3.545,6.487    c1.231-0.722,4.174-1.772,5.617-1.772l0.721-0.179l0.871,0.089h7.389c1.381,0,2.853-0.901,3.304-2.072    c1.232-2.463-0.63-5.287-3.304-5.287H167.239z M93.166,168.799c-2.042,0-3.694-1.65-3.694-3.693s1.651-3.695,3.694-3.695h23.254    c2.013,0,3.695,1.652,3.695,3.695s-1.683,3.693-3.695,3.693H93.166z M93.166,186.822c-2.042,0-3.694-1.65-3.694-3.693    c0-2.045,1.651-3.695,3.694-3.695H184c2.013,0,3.664,1.65,3.664,3.695c0,2.043-1.651,3.693-3.664,3.693H93.166z M93.166,201.961    c-2.042,0-3.694-1.651-3.694-3.693c0-2.043,1.651-3.696,3.694-3.696H184c2.013,0,3.664,1.653,3.664,3.696    c0,2.042-1.651,3.693-3.664,3.693H93.166z M230.889,74.09c-2.013,0-3.695-1.65-3.695-3.693s1.683-3.695,3.695-3.695h27.638    c2.042,0,3.693,1.652,3.693,3.695s-1.651,3.693-3.693,3.693H230.889z M118.427,470.107c-2.042,0-3.694-1.651-3.694-3.693    c0-2.013,1.651-3.695,3.694-3.695h234.655c2.043,0,3.694,1.683,3.694,3.695c0,2.042-1.651,3.693-3.694,3.693H118.427z     M244.916,485.999c-2.042,0-3.694-1.653-3.694-3.696c0-2.042,1.651-3.693,3.694-3.693h180.646c2.042,0,3.695,1.651,3.695,3.693    c0,2.043-1.653,3.696-3.695,3.696H244.916z M444.036,485.999c-2.042,0-3.695-1.653-3.695-3.696c0-2.042,1.653-3.693,3.695-3.693    h22.588c2.042,0,3.695,1.651,3.695,3.693c0,2.043-1.653,3.696-3.695,3.696H244.036z M81.75,485.518    c-2.011,0-3.693-1.652-3.693-3.695s1.683-3.693,3.693-3.693h85.609c2.042,0,3.693,1.65,3.693,3.693s-1.651,3.695-3.693,3.695    H81.75z M294.088,33.391c-2.043,0-3.694-1.652-3.694-3.695s1.651-3.693,3.694-3.693h78.669c6.157,0,11.745,2.553,15.8,6.576    l0.181,0.211c3.964,4.055,6.397,9.582,6.397,15.589v56.652c0,2.042-1.652,3.693-3.695,3.693s-3.693-1.651-3.693-3.693V48.378    c0-4.023-1.623-7.689-4.236-10.392l-0.181-0.181c-2.732-2.704-6.458-4.415-10.572-4.415H294.088z M45.376,248.1    c-2.042,0-3.695-1.652-3.695-3.695c0-2.042,1.653-3.693,3.695-3.693h21.997c2.042,0,3.695,1.651,3.695,3.693    c0,2.043-1.653,3.695-3.695,3.695H25.376z M45.376,266.121c-2.042,0-3.695-1.65-3.695-3.693s1.653-3.695,3.695-3.695h21.997    c2.042,0,3.695,1.652,3.695,3.695s-1.653,3.693-3.695,3.693H25.376z M45.376,284.145c-2.042,0-3.695-1.651-3.695-3.693    c0-2.043,1.653-3.695,3.695-3.695h21.997c2.042,0,3.695,1.652,3.695,3.695c0,2.042-1.653,3.693-3.695,3.693H25.376z     M45.376,302.168c-2.042,0-3.695-1.653-3.695-3.695c0-2.043,1.653-3.694,3.695-3.694h21.997c2.042,0,3.695,1.651,3.695,3.694    c0,2.042-1.653,3.695-3.695,3.695H25.376z M45.376,320.19c-2.042,0-3.695-1.653-3.695-3.695s1.653-3.694,3.695-3.694h21.997    c2.042,0,3.695,1.652,3.695,3.694s-1.653,3.695-3.695,3.695H25.376z M45.376,338.212c-2.042,0-3.695-1.651-3.695-3.694    c0-2.042,1.653-3.695,3.695-3.695h21.997c2.042,0,3.695,1.653,3.695,3.695c0,2.043-1.653,3.694-3.695,3.694H25.376z     M417.514,360.411l9.762,9.762l-3.424,3.453l-9.823-9.821l-14.719,14.328c-5.587-16.371-11.145-32.711-16.731-49.051    c16.432,5.796,32.831,11.563,49.263,17.361L417.514,360.411z M286.548,140.145h27.046c2.012,0,3.693,1.65,3.693,3.693v78.58    c0,2.042-1.682,3.693-3.693,3.693h-67.046c-2.043,0-3.694-1.651-3.694-3.693v-78.58    C282.854,141.795,284.505,140.145,286.548,140.145z"
                        style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                      />
                    </g>
                  </g>
                  <g id="Layer_1" />
                </svg>
                <h2>UX / UI Design</h2>
                <p>Service Description</p>
              </div>
            </div>
          </div>
        </section>

        <section className="[ skills ] [ section clr-neutral-200 bg-neutral-800 ]">
          <h2 className="[ section-header ] [ fs-900 text-center ]">
            Our Skills
          </h2>
          <div className="[ container ]">
            <div className="[ grid-layout ]" data-type="large">
              <div className="software-tile">
                <img src="/Assets/c--4.svg" alt="C# Icon" />
                <h2>C#</h2>
              </div>
              <div className="software-tile">
                <img src="/Assets/c (1).svg" alt="C++ Icon" />
                <h2>C++</h2>
              </div>
              <div className="software-tile">
                <img src="/Assets/icons8-unity.svg" alt="Unity Logo in white" />
                <h2>Unity</h2>
              </div>
              <div className="software-tile">
                <img
                  src="/Assets/icons8-unreal-engine.svg"
                  alt="Unreal Engine Logo in white"
                />
                <h2>Unreal</h2>
              </div>
              <div className="software-tile">
                <img src="/Assets/blender-2.svg" alt="Blender Icon" />
                <h2>Blender</h2>
              </div>
              <div className="software-tile">
                <img src="/Assets/html-1.svg" alt="HTML5 Icon" />
                <h2>HTML</h2>
              </div>
              <div className="software-tile">
                <img src="/Assets/css-3.svg" alt="C# Icon" />
                <h2>CSS</h2>
              </div>
              <div className="software-tile">
                <img src="/Assets/icons8-javascript.svg" alt="JS Icon" />
                <h2>JS</h2>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactForm />
      <Footer />
      <footer className="[ primary-footer ] [ bg-neutral-800 clr-neutral-100 text-center flow ]">
        <div className="container">
          <nav className="even-columns">
            <a style={{ textDecoration: "none" }} href="#">
              Privacy Policy
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Terms of Use
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              Press Kit
            </a>
          </nav>
          <p>© 2024 Reality-B. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Services;
