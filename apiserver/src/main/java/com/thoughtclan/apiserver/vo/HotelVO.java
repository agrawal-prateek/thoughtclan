package com.thoughtclan.apiserver.vo;

import java.io.Serializable;

@SuppressWarnings("serial")
public class HotelVO implements Serializable {
    private Integer id;
    private String name;
    private String hostName;
    private String neighbourhoodGroup;
    private String neighbourhood;
    private Double latitude;
    private Double longitude;
    private String roomType;
    private Integer price;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHostName() {
        return hostName;
    }

    public void setHostName(String hostName) {
        this.hostName = hostName;
    }

    public String getNeighbourhoodGroup() {
        return neighbourhoodGroup;
    }

    public void setNeighbourhoodGroup(String neighbourhoodGroup) {
        this.neighbourhoodGroup = neighbourhoodGroup;
    }

    public String getNeighbourhood() {
        return neighbourhood;
    }

    public void setNeighbourhood(String neighbourhood) {
        this.neighbourhood = neighbourhood;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}

