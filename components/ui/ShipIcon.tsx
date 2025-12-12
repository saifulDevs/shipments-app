import Svg, { Path } from "react-native-svg";

type Props = {
    size?: number;
};

export function ShipIcon({ size = 40 }: Props) {
    return (
        <Svg width={size} height={size} viewBox="0 0 43 43" fill="none">
            <Path d="M31.7182 0H10.7823V10.7825H31.7182V0Z" fill="#004EF8" />
            <Path d="M31.7182 31.718H10.7823V42.5005H31.7182V31.718Z" fill="#004EF8" />
            <Path d="M10.7823 10.7825L0 10.7825V31.718L10.7823 31.718L10.7823 10.7825Z" fill="#004EF8" />
            <Path d="M42.5005 10.7825L31.7182 10.7825L31.7182 31.718L42.5005 31.718V10.7825Z" fill="#004EF8" />
            <Path d="M31.7173 10.7816H21.2498V24.3638H31.7173V10.7816Z" fill="#0DCFFF" />
            <Path d="M10.7823 18.1349H21.2498V31.7171L10.7823 31.718L10.7823 18.1349Z" fill="#F9E900" />
        </Svg>
    );
}