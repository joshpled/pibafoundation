import React, { useEffect, useState, useRef } from "react";
import MaterialTable from "material-table";

function DogTable({ data }) {
  const [dogsData, setdogsData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    setdogsData(data);
    return () => {
      abortController.abort();
    };
  }, [data]);

  return (
    <div style={{ width: "80vw", margin: "20px" }}>
      <MaterialTable
        options={{
          selection: true,
          pageSizeOptions: [10, 25, 50, 100],
          pageSize: 10,
          toolbar: true,
        }}
        columns={[
          { title: "id", field: "id", type: "numeric", hidden: true },
          { title: "ID", field: "ID", hidden: true },
          { title: "Name", field: "Name" },
          { title: "Age", field: "Age", type: "numeric" },
          { title: "Breed", field: "Breed" },
          { title: "Color", field: "Color" },
          { title: "CoverPhoto", field: "CoverPhoto", hidden: true },
          { title: "Weight", field: "CurrentWeightPounds" },
          { title: "Date of Birth", field: "DOBUnixTime" },
          { title: "Description", field: "Description", hidden: true },
          { title: "InFoster", field: "InFoster" },
          { title: "LastIntakeUnixTime", field: "LastIntakeUnixTime", hidden: true },
          { title: "LastUpdatedUnixTime", field: "LastUpdatedUnixTime", hidden: true },
          { title: "Pattern", field: "Pattern", hidden: true },
          { title: "Photos", field: "Photos", hidden: true },
          { title: "Sex", field: "Sex" },
          { title: "Size", field: "Size" },
          { title: "Status", field: "Status" },
          { title: "Type", field: "Type" },
        ]}
        data={dogsData}
        detailPanel={[
          {
            icon: "description",
            tooltip: "Show Description",
            render: (rowData) => {
              return (
                <div
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#E53935",
                  }}
                >
                  {rowData.Description}
                </div>
              );
            },
          },
        ]}
        title="ShelterLuv Dog Data"
      />
    </div>
  );
}

export default DogTable;
