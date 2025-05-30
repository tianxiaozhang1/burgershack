"use client"
import React, { useState, useEffect, useTransition } from "react";
// , useContext
import { useRouter } from 'next/navigation';

import Link from 'next/link'

import { formatCurrencyString } from "use-shopping-cart";
import { useShoppingCart } from "use-shopping-cart";
import localFont from 'next/font/local'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CheckoutItem from '../../components/CheckoutItem'

import DoorDashIcon from '../../images/icons/DoorDashIcon'
import GrubHubIcon from '../../images/icons/GrubHubIcon'
import SkipDishesIcon from '../../images/icons/SkipDishesIcon'
import UberEatsIcon from '../../images/icons/UberEatsIcon'


const MasterCardIcon = () => {
    return (
        <svg viewBox="0 0 200 120" version="1.1" className="rounded-md size-12 lg:size-18">
            <g id="Rounded" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Large" transform="translate(-32.000000, -404.000000)">
                    <g id="large/mastercard" transform="translate(32.000000, 404.000000)">
                        <rect id="Background" fill="#10427A" x="0" y="0" width="200" height="120" rx="8"></rect>
                        <g id="Logo" transform="translate(52.000000, 20.000000)" fillRule="nonzero">
                            <g id="mastercard">
                                <rect id="Rectangle-path" fill="#FF5F00" x="36.444549" y="6.79534022" width="27.0118354" height="49.9501544"></rect>
                                <path d="M38.1595777,31.7704094 C38.1595777,21.621526 42.7901781,12.6199079 49.9075824,6.79533142 C44.6767188,2.55927578 38.0738258,-7.82864208e-06 30.8706697,-7.82864208e-06 C13.8060499,-7.82864208e-06 6.74147421e-07,14.2084287 6.74147421e-07,31.7704094 C6.74147421e-07,49.3323899 13.8060499,63.5408265 30.8706697,63.5408265 C38.0738258,63.5408265 44.6767188,60.9815429 49.9075824,56.7454874 C42.7901781,51.0091618 38.1595777,41.9192929 38.1595777,31.7704094 Z" id="Shape" fill="#EB001B"></path>
                                <path d="M99.900916,31.7704094 C99.900916,49.3323899 86.0948668,63.5408265 69.0302469,63.5408265 C61.8270906,63.5408265 55.2241973,60.9815429 49.9933344,56.7454874 C57.1964902,50.920911 61.7413387,41.9192929 61.7413387,31.7704094 C61.7413387,21.621526 57.1107383,12.6199079 49.9933344,6.79533142 C55.2241973,2.55927578 61.8270906,-7.82864208e-06 69.0302469,-7.82864208e-06 C86.0948668,-7.82864208e-06 99.900916,14.2966799 99.900916,31.7704094 Z" id="Shape" fill="#F79E1B"></path>
                            </g>
                            <path d="M14.5714286,83.8235292 L14.5714286,78.5294113 C14.5714286,76.4999997 13.2380952,75.1764701 10.9523809,75.1764701 C9.80952379,75.1764701 8.57142853,75.5294112 7.71428569,76.6764701 C7.04761902,75.705882 6.09523806,75.1764701 4.66666666,75.1764701 C3.71428569,75.1764701 2.76190473,75.4411763 2,76.4117648 L2,75.3529409 L0,75.3529409 L0,83.8235292 L2,83.8235292 L2,79.1470587 C2,77.6470586 2.85714284,76.9411763 4.19047618,76.9411763 C5.52380951,76.9411763 6.19047617,77.7352936 6.19047617,79.1470587 L6.19047617,83.8235292 L8.19047617,83.8235292 L8.19047617,79.1470587 C8.19047617,77.6470586 9.14285713,76.9411763 10.3809523,76.9411763 C11.7142857,76.9411763 12.3809524,77.7352936 12.3809524,79.1470587 L12.3809524,83.8235292 L14.5714286,83.8235292 L14.5714286,83.8235292 Z M44.1904762,75.3529409 L40.9523808,75.3529409 L40.9523808,72.7941173 L38.9523812,72.7941173 L38.9523812,75.3529409 L37.1428572,75.3529409 L37.1428572,77.0294113 L38.9523812,77.0294113 L38.9523812,80.9117645 C38.9523812,82.8529411 39.8095237,84 42.0952384,84 C42.9523809,84 43.904762,83.7352938 44.5714285,83.3823527 L44.0000002,81.7941173 C43.4285714,82.1470584 42.7619049,82.2352938 42.2857143,82.2352938 C41.3333336,82.2352938 40.9523808,81.7058822 40.9523808,80.8235291 L40.9523808,77.0294113 L44.1904762,77.0294113 L44.1904762,75.3529409 L44.1904762,75.3529409 Z M61.1428572,75.1764701 C60.0000001,75.1764701 59.2380954,75.705882 58.7619047,76.4117648 L58.7619047,75.3529409 L56.7619047,75.3529409 L56.7619047,83.8235292 L58.7619047,83.8235292 L58.7619047,79.0588233 C58.7619047,77.6470586 59.4285713,76.8529409 60.6666666,76.8529409 C61.047619,76.8529409 61.5238096,76.9411763 61.9047619,77.0294113 L62.4761907,75.2647055 C62.0952383,75.1764701 61.5238096,75.1764701 61.1428572,75.1764701 L61.1428572,75.1764701 L61.1428572,75.1764701 Z M35.5238095,76.0588232 C34.5714286,75.4411763 33.2380953,75.1764701 31.8095238,75.1764701 C29.5238096,75.1764701 27.9999999,76.235294 27.9999999,77.9117644 C27.9999999,79.3235295 29.1428572,80.1176468 31.142857,80.382353 L32.0952382,80.470588 C33.1428571,80.6470583 33.7142856,80.9117645 33.7142856,81.3529411 C33.7142856,81.970588 32.9523809,82.4117646 31.6190475,82.4117646 C30.2857143,82.4117646 29.2380952,81.970588 28.5714284,81.5294114 L27.6190475,82.9411765 C28.6666666,83.6470584 30.0952381,84 31.5238094,84 C34.1904762,84 35.7142857,82.8529411 35.7142857,81.2647057 C35.7142857,79.7647056 34.4761904,78.9705883 32.5714285,78.7058821 L31.6190475,78.6176467 C30.7619047,78.5294113 30.0952381,78.352941 30.0952381,77.8235294 C30.0952381,77.2058821 30.7619047,76.8529409 31.8095238,76.8529409 C32.9523809,76.8529409 34.095238,77.2941175 34.6666665,77.5588232 L35.5238095,76.0588232 L35.5238095,76.0588232 Z M88.6666667,75.1764701 C87.5238096,75.1764701 86.7619049,75.705882 86.2857143,76.4117648 L86.2857143,75.3529409 L84.2857143,75.3529409 L84.2857143,83.8235292 L86.2857143,83.8235292 L86.2857143,79.0588233 C86.2857143,77.6470586 86.9523809,76.8529409 88.1904762,76.8529409 C88.5714285,76.8529409 89.0476191,76.9411763 89.4285715,77.0294113 L90.0000002,75.2647055 C89.6190479,75.1764701 89.0476191,75.1764701 88.6666667,75.1764701 L88.6666667,75.1764701 L88.6666667,75.1764701 Z M63.1428572,79.5882348 C63.1428572,82.1470584 65.0476191,84 68.0000002,84 C69.3333333,84 70.2857144,83.7352938 71.2380952,83.0294115 L70.2857144,81.5294114 C69.5238097,82.0588234 68.761905,82.3235292 67.904762,82.3235292 C66.2857144,82.3235292 65.1428572,81.2647057 65.1428572,79.5882348 C65.1428572,77.9999998 66.2857144,76.9411763 67.904762,76.8529409 C68.761905,76.8529409 69.5238097,77.1176467 70.2857144,77.6470586 L71.2380952,76.1470586 C70.2857144,75.4411763 69.3333333,75.1764701 68.0000002,75.1764701 C65.0476191,75.1764701 63.1428572,77.0294113 63.1428572,79.5882348 L63.1428572,79.5882348 L63.1428572,79.5882348 Z M81.6190477,79.5882348 L81.6190477,75.3529409 L79.6190477,75.3529409 L79.6190477,76.4117648 C78.9523811,75.6176466 78,75.1764701 76.7619047,75.1764701 C74.1904763,75.1764701 72.1904763,77.0294113 72.1904763,79.5882348 C72.1904763,82.1470584 74.1904763,84 76.7619047,84 C78.0952382,84 79.0476193,83.558823 79.6190477,82.7647057 L79.6190477,83.8235292 L81.6190477,83.8235292 L81.6190477,79.5882348 Z M74.2857145,79.5882348 C74.2857145,78.0882348 75.3333334,76.8529409 77.0476193,76.8529409 C78.666667,76.8529409 79.8095241,77.9999998 79.8095241,79.5882348 C79.8095241,81.0882349 78.666667,82.3235292 77.0476193,82.3235292 C75.3333334,82.2352938 74.2857145,81.0882349 74.2857145,79.5882348 L74.2857145,79.5882348 Z M50.3809523,75.1764701 C47.7142857,75.1764701 45.8095238,76.9411763 45.8095238,79.5882348 C45.8095238,82.2352938 47.7142857,84 50.4761905,84 C51.8095238,84 53.142857,83.6470584 54.1904759,82.8529411 L53.2380952,81.5294114 C52.4761905,82.0588234 51.5238094,82.4117646 50.5714287,82.4117646 C49.3333334,82.4117646 48.0952381,81.882353 47.8095238,80.382353 L54.5714283,80.382353 L54.5714283,79.6764701 C54.6666665,76.9411763 52.9523806,75.1764701 50.3809523,75.1764701 L50.3809523,75.1764701 L50.3809523,75.1764701 Z M50.3809523,76.7647055 C51.6190476,76.7647055 52.4761905,77.4705883 52.6666665,78.7941175 L47.9047621,78.7941175 C48.0952381,77.6470586 48.952381,76.7647055 50.3809523,76.7647055 L50.3809523,76.7647055 Z M100,79.5882348 L100,72 L98,72 L98,76.4117648 C97.3333334,75.6176466 96.3809523,75.1764701 95.1428574,75.1764701 C92.5714286,75.1764701 90.5714286,77.0294113 90.5714286,79.5882348 C90.5714286,82.1470584 92.5714286,84 95.1428574,84 C96.4761905,84 97.4285716,83.558823 98,82.7647057 L98,83.8235292 L100,83.8235292 L100,79.5882348 Z M92.6666668,79.5882348 C92.6666668,78.0882348 93.7142857,76.8529409 95.4285716,76.8529409 C97.0476193,76.8529409 98.1904764,77.9999998 98.1904764,79.5882348 C98.1904764,81.0882349 97.0476193,82.3235292 95.4285716,82.3235292 C93.7142857,82.2352938 92.6666668,81.0882349 92.6666668,79.5882348 L92.6666668,79.5882348 Z M25.8095239,79.5882348 L25.8095239,75.3529409 L23.8095239,75.3529409 L23.8095239,76.4117648 C23.1428571,75.6176466 22.1904762,75.1764701 20.9523809,75.1764701 C18.3809522,75.1764701 16.3809522,77.0294113 16.3809522,79.5882348 C16.3809522,82.1470584 18.3809522,84 20.9523809,84 C22.2857142,84 23.2380953,83.558823 23.8095239,82.7647057 L23.8095239,83.8235292 L25.8095239,83.8235292 L25.8095239,79.5882348 Z M18.3809523,79.5882348 C18.3809523,78.0882348 19.4285714,76.8529409 21.1428571,76.8529409 C22.7619047,76.8529409 23.9047618,77.9999998 23.9047618,79.5882348 C23.9047618,81.0882349 22.7619047,82.3235292 21.1428571,82.3235292 C19.4285714,82.2352938 18.3809523,81.0882349 18.3809523,79.5882348 Z" id="Shape" fill="#FFFFFF"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

const VisaIcon = () => {
    return (
        <svg viewBox="0 0 200 120" version="1.1" className="rounded-md size-12 lg:size-18">
            <g id="Rounded" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Large" transform="translate(-32.000000, -28.000000)">
                    <g id="large/visa" transform="translate(32.000000, 28.000000)">
                        <rect id="Background" fill="#25459A" x="0" y="0" width="200" height="120" rx="8"></rect>
                        <g id="Logo" transform="translate(32.000000, 40.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <path d="M68.2672516,27.2122001 C68.1919404,21.6403198 73.5588253,18.5307792 77.601826,16.6821648 C81.7558108,14.7851962 83.151042,13.5689046 83.1351871,11.8727915 C83.1034772,9.27654823 79.8215122,8.130928 76.7496247,8.08629345 C71.3906676,8.00818295 68.2751783,9.44392782 65.7978502,10.5300353 L63.8675158,2.05318951 C66.3527715,0.97824065 70.9546576,0.0409150083 75.7269836,0 C86.9284726,0 94.2574019,5.18876693 94.2970395,13.2341454 C94.3406403,23.4442997 79.2467723,24.0096708 79.3498288,28.5735539 C79.3855023,29.9572251 80.7926254,31.4338851 83.8764037,31.8095591 C85.4024382,31.9992559 89.6158792,32.1443183 94.3921687,30.0799701 L96.2670112,38.2815696 C93.6985165,39.1593824 90.3967329,40 86.2863494,40 C75.7428385,40 68.3267073,34.7405617 68.2672516,27.2122001 M114.282145,39.2932862 C112.236863,39.2932862 110.512642,38.1737028 109.743679,36.4552724 L93.7421172,0.602566485 L104.93568,0.602566485 L107.163294,6.37902176 L120.842112,6.37902176 L122.134286,0.602566485 L132,0.602566485 L123.390787,39.2932862 L114.282145,39.2932862 M115.847817,28.8413614 L119.078253,14.3128138 L110.231217,14.3128138 L115.847817,28.8413614 M54.6954535,39.2932862 L45.8721999,0.602566485 L56.538586,0.602566485 L65.3578762,39.2932862 L54.6954535,39.2932862 M38.915861,39.2932862 L27.8134648,12.958899 L23.3225632,35.3505672 C22.7953877,37.8501021 20.7144316,39.2932862 18.4035794,39.2932862 L0.253678458,39.2932862 L0,38.1699831 C3.72590236,37.4111957 7.95916162,36.187465 10.5236923,34.8781847 C12.0933277,34.0784823 12.5412287,33.3792076 13.0565131,31.4785195 L21.5626689,0.602566485 L32.8355053,0.602566485 L50.1173503,39.2932862 L38.915861,39.2932862" id="Shape" transform="translate(66.000000, 20.000000) scale(-1, 1) rotate(-180.000000) translate(-66.000000, -20.000000) "></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

const AMEXIcon = () => {
    return (
        <svg viewBox="0 0 200 120" version="1.1" className="rounded-md size-12 lg:size-18">
            <g id="Rounded" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Large" transform="translate(-32.000000, -968.000000)">
                    <g id="large/american-express" transform="translate(32.000000, 968.000000)">
                        <rect id="Background" fill="#13A8E0" x="0" y="0" width="200" height="120" rx="8"></rect>
                        <g id="Logo" transform="translate(0.000000, 24.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <g id="amex">
                                <path d="M18.4120141,19.0306923 L14.5787986,9.37211538 L10.7674912,19.0306923 L18.4120141,19.0306923 Z M102.857244,15.1846538 C102.087633,15.6676923 101.177385,15.6837692 100.086926,15.6837692 L93.2833922,15.6837692 L93.2833922,10.3023846 L100.179505,10.3023846 C101.155477,10.3023846 102.173852,10.3476923 102.835336,10.7393846 C103.561837,11.0923462 104.011307,11.8435769 104.011307,12.8812692 C104.011307,13.9401538 103.583746,14.7922308 102.857244,15.1846538 Z M151.392933,19.0306923 L147.517314,9.37211538 L143.662898,19.0306923 L151.392933,19.0306923 Z M60.9194346,29.4850769 L55.1780919,29.4850769 L55.1568905,10.5099231 L47.0360424,29.4850769 L42.1187279,29.4850769 L33.9766784,10.4931154 L33.9766784,29.4850769 L22.5858657,29.4850769 L20.4339223,24.0810385 L8.77314488,24.0810385 L6.59929329,29.4850769 L0.516607774,29.4850769 L10.545583,5.25715385 L18.8664311,5.25715385 L28.3915194,28.196 L28.3915194,5.25715385 L37.5321555,5.25715385 L44.8614841,21.6928846 L51.5943463,5.25715385 L60.9187279,5.25715385 L60.9187279,29.4850769 L60.9194346,29.4850769 Z M83.8021201,29.4850769 L65.0932862,29.4850769 L65.0932862,5.25715385 L83.8021201,5.25715385 L83.8021201,10.3023846 L70.6939929,10.3023846 L70.6939929,14.6694615 L83.4876325,14.6694615 L83.4876325,19.6357692 L70.6939929,19.6357692 L70.6939929,24.4741923 L83.8021201,24.4741923 L83.8021201,29.4850769 L83.8021201,29.4850769 Z M110.180919,11.7821923 C110.180919,15.6450385 107.687633,17.6407692 106.234629,18.24 C107.460071,18.7223077 108.506714,19.5743846 109.004947,20.2803077 C109.79576,21.4853462 109.932155,22.5617692 109.932155,24.7255769 L109.932155,29.4850769 L104.283392,29.4850769 L104.262191,26.4297308 C104.262191,24.9718462 104.397173,22.8752692 103.378092,21.7096923 C102.559717,20.8576154 101.312367,20.6727308 99.2961131,20.6727308 L93.2840989,20.6727308 L93.2840989,29.4850769 L87.6840989,29.4850769 L87.6840989,5.25715385 L100.565371,5.25715385 C103.427562,5.25715385 105.536396,5.33534615 107.346996,6.41761538 C109.118728,7.49988462 110.180919,9.07980769 110.180919,11.7821923 Z M119.143463,29.4850769 L113.428975,29.4850769 L113.428975,5.25715385 L119.143463,5.25715385 L119.143463,29.4850769 Z M185.438869,29.4850769 L177.502473,29.4850769 L166.886926,11.3006154 L166.886926,29.4850769 L155.481272,29.4850769 L153.301767,24.0810385 L141.667845,24.0810385 L139.553357,29.4850769 L133,29.4850769 C130.277739,29.4850769 126.831095,28.8624615 124.879152,26.8053462 C122.910954,24.7482308 121.886926,21.9618077 121.886926,17.556 C121.886926,13.9628077 122.49894,10.678 124.906007,8.08230769 C126.716608,6.14869231 129.551943,5.25715385 133.411307,5.25715385 L138.833216,5.25715385 L138.833216,10.4485385 L133.525088,10.4485385 C131.481272,10.4485385 130.327208,10.7627692 129.215548,11.8837692 C128.260777,12.9039231 127.605654,14.8324231 127.605654,17.3718462 C127.605654,19.9675385 128.104594,21.8390385 129.145583,23.0616154 C130.007774,24.0203846 131.574558,24.3112308 133.048763,24.3112308 L135.563958,24.3112308 L143.457244,5.25788462 L151.848763,5.25788462 L161.330742,28.1740769 L161.330742,5.25788462 L169.857951,5.25788462 L179.702473,22.1313462 L179.702473,5.25788462 L185.438869,5.25788462 L185.438869,29.4850769 Z M0.450883392,34.2438462 L10.0204947,34.2438462 L12.1780919,28.8624615 L17.0084806,28.8624615 L19.160424,34.2438462 L37.9879859,34.2438462 L37.9879859,30.1296154 L39.6685512,34.2613846 L49.4424028,34.2613846 L51.1229682,30.0682308 L51.1229682,34.2438462 L97.9130742,34.2438462 L97.8911661,25.4103077 L98.7964664,25.4103077 C99.4303887,25.4329615 99.6155477,25.4936154 99.6155477,26.5758846 L99.6155477,34.2438462 L123.815548,34.2438462 L123.815548,32.1874615 C125.767491,33.269 128.803534,34.2438462 132.798587,34.2438462 L142.979505,34.2438462 L145.158304,28.8624615 L149.988693,28.8624615 L152.119435,34.2438462 L171.738516,34.2438462 L171.738516,29.1321154 L174.709541,34.2438462 L190.431095,34.2438462 L190.431095,0.453076923 L174.872085,0.453076923 L174.872085,4.44380769 L172.693286,0.453076923 L156.727915,0.453076923 L156.727915,4.44380769 L154.727208,0.453076923 L133.161837,0.453076923 C129.551943,0.453076923 126.378799,0.974115385 123.815548,2.42615385 L123.815548,0.453076923 L108.933569,0.453076923 L108.933569,2.42615385 C107.302473,0.929538462 105.079859,0.453076923 102.608481,0.453076923 L48.2388693,0.453076923 L44.5908127,9.18065385 L40.844523,0.453076923 L23.7194346,0.453076923 L23.7194346,4.44380769 L21.8381625,0.453076923 L7.23321555,0.453076923 L0.450883392,16.5190385 L0.450883392,34.2438462 L0.450883392,34.2438462 Z" id="Shape"></path>
                                <path d="M199.706007,52.1148077 L189.49894,52.1148077 C188.479859,52.1148077 187.802827,52.1542692 187.232509,52.5525385 C186.641696,52.9449615 186.414134,53.5273846 186.414134,54.2961538 C186.414134,55.2103462 186.913074,55.8322308 187.638869,56.1011538 C188.229682,56.3138077 188.864311,56.3759231 189.797173,56.3759231 L192.832509,56.4599615 C195.895406,56.5381538 197.939929,57.0825769 199.186572,58.4103846 C199.413428,58.5952692 199.549823,58.8028077 199.706007,59.0103462 L199.706007,52.1148077 Z M199.706007,68.0916154 C198.345583,70.1487308 195.6947,71.1915385 192.106007,71.1915385 L181.290459,71.1915385 L181.290459,65.9950385 L192.062191,65.9950385 C193.130742,65.9950385 193.878445,65.8496154 194.328622,65.3950769 C194.718728,65.0201923 194.990813,64.4757692 194.990813,63.8144231 C194.990813,63.1085 194.718728,62.548 194.306714,62.2118462 C193.900353,61.8420769 193.308834,61.674 192.333569,61.674 C187.074912,61.4891154 180.514488,61.8420769 180.514488,54.1733846 C180.514488,50.6583846 182.672792,46.9585 188.549823,46.9585 L199.706007,46.9585 L199.706007,42.1368846 L189.340636,42.1368846 C186.212721,42.1368846 183.940636,42.9115 182.331449,44.1158077 L182.331449,42.1368846 L167.000707,42.1368846 C164.549117,42.1368846 161.671378,42.7653462 160.310247,44.1158077 L160.310247,42.1368846 L132.933569,42.1368846 L132.933569,44.1158077 C130.75477,42.4905769 127.078445,42.1368846 125.381625,42.1368846 L107.323675,42.1368846 L107.323675,44.1158077 C105.6,42.3897308 101.766784,42.1368846 99.4303887,42.1368846 L79.2204947,42.1368846 L74.5957597,47.3121923 L70.264311,42.1368846 L40.0749117,42.1368846 L40.0749117,75.9510385 L69.6961131,75.9510385 L74.4614841,70.6938846 L78.95053,75.9510385 L97.2091873,75.9678462 L97.2091873,68.0134231 L99.0042403,68.0134231 C101.426855,68.0521538 104.284099,67.9513077 106.804947,66.8244615 L106.804947,75.9503077 L121.865018,75.9503077 L121.865018,67.1372308 L122.591519,67.1372308 C123.518728,67.1372308 123.609894,67.1766923 123.609894,68.1347308 L123.609894,75.9495769 L169.359717,75.9495769 C172.264311,75.9495769 175.300353,75.1808077 176.981625,73.7857692 L176.981625,75.9495769 L191.493286,75.9495769 C194.513074,75.9495769 197.462191,75.5118462 199.706007,74.3908462 L199.706007,68.0916154 Z M177.366078,58.4103846 C178.456537,59.5774231 179.040989,61.0506538 179.040989,63.5447692 C179.040989,68.7580769 175.891166,71.1915385 170.24311,71.1915385 L159.334982,71.1915385 L159.334982,65.9950385 L170.199293,65.9950385 C171.261484,65.9950385 172.014841,65.8496154 172.486926,65.3950769 C172.872085,65.0201923 173.14841,64.4757692 173.14841,63.8144231 C173.14841,63.1085 172.84947,62.548 172.465018,62.2118462 C172.036749,61.8420769 171.445936,61.674 170.470671,61.674 C165.233216,61.4891154 158.674205,61.8420769 158.674205,54.1733846 C158.674205,50.6583846 160.809894,46.9585 166.681272,46.9585 L177.908834,46.9585 L177.908834,52.1162692 L167.635336,52.1162692 C166.616961,52.1162692 165.95477,52.1557308 165.391519,52.554 C164.778092,52.9464231 164.55053,53.5288462 164.55053,54.2976154 C164.55053,55.2118077 165.071378,55.8336923 165.775972,56.1026154 C166.366784,56.3152692 167.001413,56.3773846 167.955477,56.3773846 L170.970318,56.4614231 C174.010601,56.5381538 176.097527,57.0818462 177.366078,58.4103846 Z M126.830389,56.9137692 C126.081272,57.3734231 125.15477,57.4128846 124.065018,57.4128846 L117.261484,57.4128846 L117.261484,51.9701154 L124.157597,51.9701154 C125.15477,51.9701154 126.15265,51.9920385 126.830389,52.4078462 C127.556184,52.8002692 127.990106,53.5507692 127.990106,54.5877308 C127.990106,55.6246923 127.556184,56.4599615 126.830389,56.9137692 Z M130.212721,59.9296538 C131.459364,60.4053846 132.478445,61.2581923 132.956184,61.9641154 C133.746996,63.1472308 133.861484,64.2514231 133.884099,66.3874615 L133.884099,71.1915385 L128.261484,71.1915385 L128.261484,68.1595769 C128.261484,66.7016923 128.397173,64.543 127.356184,63.4161538 C126.537809,62.548 125.290459,62.3404615 123.24735,62.3404615 L117.262191,62.3404615 L117.262191,71.1915385 L111.634629,71.1915385 L111.634629,46.9577692 L124.564664,46.9577692 C127.4,46.9577692 129.465018,47.0871154 131.30318,48.1014231 C133.070671,49.2056154 134.182332,50.7183077 134.182332,53.4828077 C134.181625,57.3507692 131.686926,59.3245769 130.212721,59.9296538 Z M137.287633,46.9577692 L155.979505,46.9577692 L155.979505,51.9693846 L142.865018,51.9693846 L142.865018,56.3751923 L155.659364,56.3751923 L155.659364,61.3195769 L142.865018,61.3195769 L142.865018,66.1411923 L155.979505,66.1631154 L155.979505,71.1915385 L137.287633,71.1915385 L137.287633,46.9577692 L137.287633,46.9577692 Z M99.5017668,58.1414615 L92.264311,58.1414615 L92.264311,51.9701154 L99.5667845,51.9701154 C101.588693,51.9701154 102.992226,52.8221923 102.992226,54.9414231 C102.992226,57.0372692 101.65371,58.1414615 99.5017668,58.1414615 Z M86.6862191,68.9875385 L78.0876325,59.1163077 L86.6862191,49.5585769 L86.6862191,68.9875385 Z M64.4805654,66.1411923 L50.7109541,66.1411923 L50.7109541,61.3195769 L63.0063604,61.3195769 L63.0063604,56.3751923 L50.7109541,56.3751923 L50.7109541,51.9693846 L64.7519435,51.9693846 L70.8777385,59.0315385 L64.4805654,66.1411923 Z M109.004947,54.9414231 C109.004947,61.6732692 104.147703,63.0631923 99.2522968,63.0631923 L92.264311,63.0631923 L92.264311,71.1915385 L81.3787986,71.1915385 L74.4826855,63.1691538 L67.3159011,71.1915385 L45.1321555,71.1915385 L45.1321555,46.9577692 L67.6572438,46.9577692 L74.5477032,54.9012308 L81.6713781,46.9577692 L99.5667845,46.9577692 C104.011307,46.9577692 109.004947,48.2300385 109.004947,54.9414231 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

import { Patua_One, Inter } from 'next/font/google'
// Graduate, 

import { addSingleTransaction } from '../lib/actions';

const inter = Inter({ subsets: ['latin'], weight: ['400'], })
const patua_one = Patua_One({ subsets: ['latin'], weight: ['400'], })

const bkBold = localFont({ src: '../../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../../fonts/FlameSans-Regular.ttf' })

const categoryBanner = "h-18 lg:h-22 xl:h-28 text-2xl lg:text-3xl xl:text-4xl flex justify-center items-center cursor-default"
const deliveryOptionCSS = "border-2 rounded-xl py-2 px-6 cursor-pointer w-1/3 lg:text-lg flex justify-center items-center"
const deliveryServiceCSS = "cursor-pointer h-12 px-2 lg:px-4 rounded-2xl flex justify-center items-center"
const deliveryTimeCSS = `py-2 flex justify-center text-center leading-4 lg:leading-5 px-3 lg:px-4 items-center border-2 rounded-xl text-base lg:text-lg`
const headerCSS = `py-3 w-full rounded-3xl flex justify-center items-center text-xl lg:text-2xl text-center uppercase ${bkReg.className}`
const locationButton = `-mt-0.25 lg:mt-0 pt-0.25 lg:pt-0 py-0.5 text-xs lg:text-sm px-1.5 lg:px-2 border-2 rounded-xl cursor-pointer flex uppercase`

function Checkout() {
    const { shouldDisplayCart, cartCount, cartDetails, totalPrice, clearCart } = useShoppingCart();
    const router = useRouter();

    const [deliveryOption, setDeliveryOption] = useState(0)
    const [deliveryTime, setDeliveryTime] = useState(0)
    const [paymentOption, setPaymentOption] = useState(0)
    const [userAddress, setUserAddress] = useState('465 New Street');
    const [userCity, setUserCity] = useState('Toronto');
    const [userPostalCode, setUserPostalCode] = useState('M7D 9A6');
    const [locationAddress, setLocationAddress] = useState('10 Dundas St E Toronto, ON M5B 2G9');
    const [locationTel, setLocationTel] = useState('416-326-8978');

    const [isPending, startTransition] = useTransition();
    const [statusMessage, setStatusMessage] = useState(null);
    // State to hold the data for the single transaction you want to save
    const [singleTransactionData, setSingleTransactionData] = useState({
        customer_id: '1234',
        delivery_method: deliveryOption,
        // Assuming cartDetails and totalPrice are available in the component's scope
        items: [], // Initialize with empty array
        item_amounts: [], // Initialize with empty array
        item_prices: [], // Initialize with empty array
        total_amount: 0, // Initialize with 0
        tax: 0, // Initialize with 0
        total_with_tax: 0, // Initialize with 0
        date: new Date().toISOString(),
        payment_method: paymentOption,
        location_add: locationAddress,
        location_tel: locationTel,
        customer_add: userAddress + " ," + userCity + ", ON, " + userPostalCode
    });

    useEffect(() => {
        // Make sure cartDetails and totalPrice are available before mapping
        if (cartDetails && typeof totalPrice === 'number') {
           setSingleTransactionData(prevState => ({
             ...prevState, // Copy all existing properties
             delivery_method: deliveryOption,
             items: Object.values(cartDetails).map(item => item.name),
             item_amounts: Object.values(cartDetails).map(item => item.quantity),
             item_prices: Object.values(cartDetails).map(item => item.value), // Assuming 'value' is the price property
             total_amount: totalPrice,
             tax: Math.round(totalPrice*0.13),
             total_with_tax: Math.round(totalPrice*1.13),
             date: new Date().toISOString(), // Update date on each change or set it once
             payment_method: paymentOption,
             location_add: locationAddress,
             location_tel: locationTel,
             customer_add: userAddress + " ," + userCity + ", ON, " + userPostalCode
           }));
        }
    }, [deliveryOption, paymentOption, locationAddress, locationTel, userAddress, userCity, userPostalCode, cartDetails, totalPrice]); // Add cartDetails and totalPrice dependencies if they can change

    const handleDeliveryMethodChange = (newMethod) => {
        setDeliveryOption(newMethod);
    };

    const handlePaymentMethodChange = (newMethod) => {
        setPaymentOption(newMethod);
    };

    const handleLocationAddressChange = (newMethod) => {
        setLocationAddress(newMethod);
    };

    const handleLocationTelChange = (newMethod) => {
        setLocationTel(newMethod);
    };

    const handleCheckout = async () => {
        setStatusMessage(null);

        // Get the current transaction data state
        const transactionToSave = {
             ...singleTransactionData,
             // Ensure date is current right before saving if needed
             date: new Date().toISOString(),
        };

        startTransition(async () => {
            // Call the server action
            const result = await addSingleTransaction(transactionToSave);

            if (result?.message) {
                // Handle error case
                setStatusMessage({ type: 'error', text: result.message });
            } else if (result?.success) {
                // Handle success case
                console.log("Transaction successful:", result.success);
                setStatusMessage({ type: 'success', text: `Transaction recorded successfully! ID: ${result.success.id}` });

                // Redirect to the success page and pass the transaction data in state
                router.push(`/success?id=${result.success.id}`);
            }
        });
    };

    return (
        // <OrderContext.Provider value={{ theme, setTheme }}>
            <div className='bg-[#f7f1e7] '>
                {/* h-screen */}
                <Header/>

                <div className={` ${bkBold.className}`}>

                    <div className={`bg-[#4c2216] ${categoryBanner}`}>
                        <div className='text-[#f7f1e7]'>Check Out</div>
                    </div>
                    
                </div>

                <div className="max-w-6xl mx-auto min-h-100 py-3 h-fit">

                    <div className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2 gap-4">    
                        <div>
                            {cartCount && cartCount > 0 ? (
                                <>
                                <div className={`bg-[#4c2216] text-white cursor-default mb-3 ${headerCSS}`}>Your order</div>

                                {Object.values(cartDetails ?? {}).map((entry) => (
                                    <CheckoutItem key={entry.id} item={entry} />
                                ))}
                                </>
                            ) : (
                                <div className={`text-center text-xl lg:text-3xl cursor-default mb-6 mt-4 ${bkReg.className}`}>You have no items in your cart</div>
                            )}
                            <div className="w-full px-12 lg:px-12 bg-white rounded-3xl shadow-md mb-6 text-[#4c2216] font-semibold text-lg lg:text-xl py-4 lg:py-8 lg:space-y-1 cursor-default">
                                <div className="flex items-center justify-between ">
                                    <div className={` ${bkReg.className}`}>Subtotal:</div>
                                    <div className="">{formatCurrencyString({ value:totalPrice, currency: "CAD" })}</div>
                                </div>
                                <div className="flex items-center justify-between ">
                                    <div className={`${bkReg.className}`}>Taxes:</div>
                                    <div className="">{formatCurrencyString({ value:totalPrice*0.13, currency: "CAD" })}</div>
                                </div>
                                <div className="max-w-full h-0.5 bg-stone-300 my-4"></div>
                                <div className="flex items-center justify-between">
                                    <div className={`${bkReg.className}`}>Total:</div>
                                    <div className="">{formatCurrencyString({ value:totalPrice*1.13, currency: "CAD" })}</div>
                                </div>
                            </div>
                        </div>

                        <div className={`mb-6 ${bkReg.className}`}>
                        
                            <div className="space-y-2 -mt-6 lg:mt-0">
                                <div className={`cursor-default ${deliveryOption < 3 ? "bg-[#318636] text-white" : "bg-stone-400 border-stone-200 text-stone-100"} ${headerCSS}`}>
                                    COME JOIN US
                                </div>

                                <div className="flex space-x-2 mt-3">
                                    <div className={`${deliveryOptionCSS} ${deliveryOption === 0 ? "bg-white border-[#4c2216]" : "bg-stone-100 border-stone-200"}`} onClick={()=>{setDeliveryOption(0)}}>
                                        <div>Dine In</div>
                                    </div>
                                    <div className={`text-center leading-5 ${deliveryOptionCSS} ${deliveryOption === 1 ? "bg-white border-[#4c2216]" : "bg-stone-100 border-stone-200"}`} onClick={()=>{setDeliveryOption(1)}}>
                                        <div>Drive Thru</div>
                                    </div>
                                    <div className={`${deliveryOptionCSS} ${deliveryOption === 2 ? "bg-white border-[#4c2216]" : "bg-stone-100 border-stone-200"}`} onClick={()=>{setDeliveryOption(2)}}>
                                        <div>Pick Up</div>
                                    </div>
                                </div>

                                <div  className={`${deliveryOption < 4 ? "bg-white border-[#4c2216]" : "bg-stone-100 border-stone-200"} rounded-3xl mt-2 lg:mt-0 py-4 border-2 flex justify-center`}>
 
                                    <div className="mt-0 mx-0 w-full px-3">
                                        <div className="flex  space-x-2 text-lg">
                                            <div onClick={deliveryOption>3 ? ()=>{setDeliveryTime(0)} : undefined} 
                                                className={`w-3/4 pl-4 pr-3 ${deliveryOption>3 ? "cursor-pointer" : "cursor-default"} 
                                                            ${deliveryOption<4 ? "border-[#4c2216] bg-white" : "border-stone-300 bg-stone-200"} py-2 flex justify-between items-center border-2 rounded-xl`}
                                            >
                                                <div>
                                                    <div className={`-mt-0.5 text-base flex lg:text-xl ${deliveryOption < 4 ? "text-stone-600" : "text-stone-400"}`}>
                                                        Default Location
                                                        <div className={`mt-0.5 ml-0.5 lg:ml-1 lg:mt-0.5 scale-90 ${locationButton} border-0 ${deliveryOption<4 ? "bg-[#318636] text-stone-50": "bg-[#779649] text-stone-200"}`}>
                                                            <div className='mt-0'>Open</div>
                                                        </div>
                                                    </div>
                                                    <div className={`text-sm lg:text-base leading-3 ${deliveryOption<4 ? "text-stone-700" : "text-stone-500"}`}>{locationAddress}</div>
                                                </div>

                                                <Link target="_blank" href="/locations">
                                                    <div className={`mt-0.25 border-2 ${deliveryOption < 4 ? "border-stone-400" : "border-stone-300 text-stone-400"} rounded-lg p-1`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 lg:size-8">
                                                            <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div onClick={deliveryOption>3 ? ()=>{setDeliveryTime(0)} : undefined} 
                                                className={`w-1/4 ${deliveryOption<3 ? "cursor-pointer" : "cursor-default"} 
                                                            ${deliveryOption<3 ? "border-stone-300 bg-stone-50 text-stone-700" : "border-stone-300 text-stone-500 bg-stone-200"} ${deliveryTimeCSS}`}
                                            >
                                                Change
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={`w-full  flex flex-col space-y-2 overflow-hidden cursor-pointer mt-3 mb-2 lg:mb-0`} >

                                <div className={`cursor-default ${deliveryOption > 3 ? "bg-[#cd2917] text-white" : "bg-stone-400 border-stone-200 text-stone-100"} ${headerCSS}`}>
                                    DELIVERY OPTIONS
                                </div>

                                <div className={`mt-2 lg:mt-0 ${deliveryOption > 3 ? "bg-white border-[#4c2216]" : "bg-stone-100 border-stone-200"} px-4 rounded-3xl pt-3 pb-1 lg:pt-3 lg:pb-1 border-2 flex justify-center`}>
                                    
                                    <div className="space-y-2 ">
                                        <div className="flex justify-center space-x-1.5">
                                            <div onClick={()=>{setDeliveryOption(4)}} className={`${deliveryOption === 4 ? "bg-white border-2 border-[#3fc066]" : "bg-stone-300"} ${deliveryServiceCSS}`}>
                                                <UberEatsIcon colour1={"#05c167"} colour2={"#000"}/>
                                            </div>
                                            <div onClick={()=>{setDeliveryOption(5)}} className={`${deliveryOption === 5 ? "bg-white border-2 border-[#f33520]" : "bg-stone-300"} ${deliveryServiceCSS}`}>
                                                <DoorDashIcon colour={"#ff3008"}/>
                                            </div>
                                            <div onClick={()=>{setDeliveryOption(6)}} className={`${deliveryOption === 6 ? "bg-white border-2 border-[#f5811c]" : "bg-stone-300"} ${deliveryServiceCSS}`}>
                                                <SkipDishesIcon colour={"#FF8000"}/>
                                            </div>
                                            <div onClick={()=>{setDeliveryOption(7)}} className={`${deliveryOption === 7 ? "bg-white border-2 border-[#eb3945]" : "bg-stone-300"} ${deliveryServiceCSS}`}>
                                                <GrubHubIcon colour={"#f63440"}/>
                                            </div>
                                        </div>

                                        <div className="mt-3 px-0 mx-0 mb-2 lg:mb-0">
                                            <div className="flex justify-center space-x-2 text-lg px-2">
                                                <div onClick={deliveryOption>3 ? ()=>{setDeliveryTime(0)} : undefined} className={`${deliveryOption>3 ? "cursor-pointer" : "cursor-default"} ${deliveryTime === 0 && deliveryOption>3 ? "border-[#4c2216] bg-white" : "border-stone-300 bg-stone-200"} ${deliveryTimeCSS} w-1/3`}>Now</div>
                                                <div onClick={deliveryOption>3 ? ()=>{setDeliveryTime(1)} : undefined} className={`${deliveryOption>3 ? "cursor-pointer" : "cursor-default"} ${deliveryTime === 1 && deliveryOption>3 ? "border-[#4c2216] bg-white" : "border-stone-300 bg-stone-200"} ${deliveryTimeCSS} w-1/3`}>In 15 Minutes</div>
                                                <div onClick={deliveryOption>3 ? ()=>{setDeliveryTime(2)} : undefined} className={`${deliveryOption>3 ? "cursor-pointer" : "cursor-default"} ${deliveryTime === 2 && deliveryOption>3 ? "border-[#4c2216] bg-white" : "border-stone-300 bg-stone-200"} ${deliveryTimeCSS} w-1/3`}>In 1 Hour</div>
                                            </div>
                                        </div>

                                        <div className={`lg:mt-2 ${deliveryOption > 3 ? "bg-white border-[#4c2216]" : "bg-stone-100 border-stone-200"} rounded-3xl py-4 border-2 flex justify-center`}>

                                            <div className="mt-0 mx-0 w-full px-3 ">
                                                <div className="flex  space-x-2 text-lg">
                                                    <div onClick={deliveryOption>3 ? ()=>{setDeliveryTime(0)} : undefined} 
                                                        className={`w-3/4 pl-4 pr-3 ${deliveryOption>3 ? "cursor-pointer" : "cursor-default"} 
                                                                    ${deliveryOption> 3 ? "border-[#4c2216] bg-white" : "border-stone-300 bg-stone-200"} py-2 flex justify-between items-center border-2 rounded-xl`}
                                                    >
                                                        <div>
                                                            <div className={`-mt-0.5 flex text-lg lg:text-xl ${deliveryOption > 3 ? "text-stone-600" : "text-stone-400"}`}>
                                                                Default Address
                                                            </div>
                                                            <div className={`text-sm lg:text-base leading-3 ${deliveryOption > 3 ? "text-stone-700" : "text-stone-500"}`}>{userAddress}, {userCity}&nbsp;ON, {userPostalCode}</div>
                                                        </div>
                                                        
                                                        <div className={`hidden mt-0.25 border-2 ${deliveryOption > 3 ? "border-stone-400" : "border-stone-300 text-stone-400"} rounded-lg p-1`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                                                <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <div 
                                                    // onClick={deliveryOption>3 ? ()=>{setDeliveryTime(0)} : undefined} 
                                                        className={`w-1/4 ${deliveryOption>3 ? "cursor-pointer" : "cursor-default"} 
                                                                    ${deliveryOption> 3 ? "border-stone-300 bg-stone-50 text-stone-700" : "border-stone-300 text-stone-500 bg-stone-200"} ${deliveryTimeCSS}`}
                                                    >
                                                        Change
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>

                            <div className={`grid lg:grid-cols-1 gap-2 mb-0 mt-3 ${bkReg.className}`}>
                                <div className="space-y-2 h-full">
                                    <div className={`bg-[#ec8740] text-white cursor-default ${headerCSS}`}>
                                        PAYMENT OPTIONS
                                    </div>

                                    <div className={`bg-white border-stone-300 rounded-3xl py-3 border-2 flex justify-center space-x-2 px-4 mt-2 lg:mt-0`}>

                                        <div onClick={()=>{setPaymentOption(0)}} className={`cursor-pointer ${paymentOption === 0 ? "bg-white border-2 border-[#4c2216] text-[#4c2216]" : "bg-stone-100 border-stone-200 text-stone-500"} py-2 w-1/2 px-1 space-x-3 rounded-xl flex justify-center items-center`}>
                                            <div>
                                                <div>
                                                    <div className="flex items-center text-sm lg:text-lg -mt-1 text-center mb-1 justify-center">Default Payment Card</div>
                                                </div>
                                                <div className="flex space-x-1 w-full">
                                                    <div className={`rounded-lg flex justify-end items-center w-1/2 lg:w-1/3`}><MasterCardIcon/></div>
                                                    <div className="flex justify-start items-center text-sm lg:text-lg ml-1 w-1/2 lg:w-2/3">
                                                        <div className="leading-2 w-1/3 lg:w-3/4">**** **** ****</div>
                                                        <div className="mb-1 ml-1 lg:ml-0">&nbsp;7842</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className={`${paymentOption > 0 ? "bg-white border-[#4c2216] text-[#4c2216]" : "bg-stone-100 border-stone-200 text-stone-500"} border-2 py-3 w-1/2 px-1 space-x-4 rounded-xl flex justify-center items-center`}>
                                            <div>
                                                <div>
                                                    <div className="flex items-center text-sm lg:text-lg -mt-1 text-center mb-1 justify-center cursor-default">Payment Options</div>
                                                </div>
                                                <div className="flex space-x-1">
                                                    <div onClick={()=>{setPaymentOption(1)}} className={` ${paymentOption === 1 ? "border-[#f6a91a]" : "border-stone-200"} cursor-pointer rounded-lg flex justify-center items-center`}><MasterCardIcon/></div>
                                                    <div onClick={()=>{setPaymentOption(2)}} className={` ${paymentOption === 2 ? "border-[#f6a91a]" : "border-stone-200"} cursor-pointer rounded-lg flex justify-center items-center`}><AMEXIcon/></div>
                                                    <div onClick={()=>{setPaymentOption(3)}} className={` ${paymentOption === 3 ? "border-[#f6a91a]" : "border-stone-200"} cursor-pointer rounded-lg flex justify-center items-center`}><VisaIcon/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>

                        
                    </div>

                    {/* <Link target="_blank" href="/success"> */}
                        <div className="flex justify-center " >
                            <div className={`cursor-pointer px-12 py-4 lg:py-6 -mt-1 mb-1 bg-[#4c2216] text-[#f7f1e7] text-xl lg:text-2xl rounded-3xl ${bkReg.className}` } onClick={handleCheckout}>Order</div>
                        </div>
                    {/* </Link> */}
                </div>

                <Footer/>
            </div>
        // </OrderContext.Provider> 
    )
}

export default Checkout
