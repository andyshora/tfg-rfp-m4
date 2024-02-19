// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/radar
import { ResponsiveRadar } from "@nivo/radar";

const LabelComponent = ({ id, x, y, anchor }) => (
  <g transform={`translate(${x}, ${y})`}>
    <g
      transform={`translate(${
        anchor === "end" ? -40 : anchor === "middle" ? -20 : 0
      }, -20)`}
    >
      <text
        style={{
          fontSize: 12,
          fontWeight: "bold",
          fill: "#fff",
        }}
      >
        {id.split(" ").map((word, i) => (
          <tspan key={i} x={0} dy={i === 0 ? 0 : 15}>
            {word}
          </tspan>
        ))}
      </text>
    </g>
  </g>
);

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveRadar = ({ data, player = "" }) => (
  <ResponsiveRadar
    data={data}
    keys={["Kevin De Bruyne"]}
    indexBy="key"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    borderColor={{ from: "color" }}
    borderWidth={0}
    gridLabelOffset={36}
    gridLabel={LabelComponent}
    gridLevels={1}
    dotSize={24}
    enableDotLabel={true}
    layers={["grid", "layers", "slices", "dots"]}
    dotLabelYOffset={3}
    dotColor={"white"}
    dotBorderWidth={0}
    colors={{ scheme: "nivo" }}
    blendMode="multiply"
    motionConfig="wobbly"
    legends={[
      {
        anchor: "top-left",
        direction: "column",
        translateX: -50,
        translateY: -40,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#fff",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsiveRadar;
