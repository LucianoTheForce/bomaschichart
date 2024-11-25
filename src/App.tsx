import { useEffect, useRef } from 'react';
import { SciChartSurface } from 'scichart';

function App() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initChart = async () => {
      // Initialize the chart when ready
      if (chartRef.current) {
        const { sciChartSurface } = await SciChartSurface.create(chartRef.current);
        return () => sciChartSurface.dispose();
      }
    };

    initChart();
  }, []);

  return (
    <div className="App">
      <div ref={chartRef} style={{ width: "800px", height: "600px" }} />
    </div>
  );
}

export default App;