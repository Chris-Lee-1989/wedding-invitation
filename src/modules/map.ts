
export interface IMapEventType {
    zoom: number;
    bounds: IBoundsType;
    geolocation: IGeoLocationType;
}
export interface IBoundsType {
    leftLon: number;
    rightLon: number;
    topLat: number;
    bottomLat: number;
}
export interface IGeoLocationType {
    latitude: number;
    longitude: number;
}
export interface IMapProps {
    geolocation: IGeoLocationType;
    onChange: () => void;
}

// 지도 초기화
export const initMap = async ({lat, lng}: {lat: number, lng: number}) => {

    const map = new window.naver.maps.Map('map', {
        // 초기 지도 중심
        center: new window.naver.maps.LatLng(lat, lng),
        // 초기 지도 확대 레벨
        zoom: 16,
        //줌 컨트롤의 표시 여부
        zoomControl: false, 
        //줌 컨트롤의 옵션
        zoomControlOptions: { 
            position: window.naver.maps.Position.CENTER
        },
        mapTypeId: window.naver.maps.MapTypeId.NORMAL,
    });

    // 마커 초기화
    map.markers = [];

    // 현위치 추가
    new window.naver.maps.Marker({
        position: {
            x: lng,
            y: lat,
            _lon: lng,
            _lat: lat,
        },
        map: map,
        draggable: false,
    });

    //지도 유형 컨트롤의 표시 여부
    map.setOptions("mapTypeControl", false);
    map.setOptions("scaleControl", false);
    map.setOptions("logoControl", false);
    map.setOptions("mapDataControl", false);
    map.setOptions("zoomControl", false);

    window.naver.maps.Event.addListener(map, 'click', (zoom: number) => {
       console.log(map.getCenter());
    });

    return map;
}