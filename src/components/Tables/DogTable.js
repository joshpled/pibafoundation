import React from "react";
import MaterialTable from "material-table";

function DogTable() {
  return (
    <div style={{ width: "80vw", margin: "20px" }}>
      <MaterialTable
        options={{
          search: false,
          showFirstLastPageButtons: false,
          selection: true,
        }}
        columns={[
          { title: "ID", field: "id" },
          { title: "Internal-ID", field: "internal-id" },
          { title: "Name", field: "name" },
          { title: "LitterGroupId", field: "littergroupid" },
          { title: "Type", field: "type" },
          { title: "CurrentLocation", field: "currentlocation" },
          { title: "Sex", field: "sex" },
          { title: "Status", field: "status" },
          { title: "InFoster", field: "infoster" },
          { title: "CurrentWeightPounds", field: "currentweightpounds" },
          { title: "Size", field: "size" },
          { title: "Altered", field: "altered" },
          { title: "DOBUnixTime", field: "dobunixtime" },
          { title: "Age", field: "age" },
          { title: "CoverPhoto", field: "coverphoto" },
          { title: "Photos", field: "photos" },
          { title: "Videos", field: "videos" },
          { title: "Breed", field: "breed" },
          { title: "Color", field: "color" },
          { title: "Pattern", field: "pattern" },
          { title: "AdoptionFeeGroup", field: "adoptionfeegroup" },
          { title: "Description", field: "description" },
          { title: "PreviousIds", field: "previousids" },
          { title: "Microchips", field: "microchips" },
          { title: "LastIntakeUnixTime", field: "lastintakeunixtime" },
          { title: "Attributes", field: "attributes" },
          { title: "LastUpdatedUnixTime", field: "lastupdatedunixtime" },
        ]}
        data={[
          {
            name: "Josh",
            age: 12,
          },
        ]}
        title="Dog's Table"
      />
    </div>
  );
}

export default DogTable;
