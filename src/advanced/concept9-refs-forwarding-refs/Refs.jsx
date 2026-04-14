import { useRef, useState, forwardRef, useEffect, use } from "react";
import { Chart } from "chart.js/auto";

// 1. Accessing DOM elements
export function InputFocus() {
    // Create input reference
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}


// 2. Storing Values
export function TimerReference() {
    const [count, setCount] = useState(0);

    // Create interval reference
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (intervalRef.current !== null) return; //  Prevent multiple intervals
        intervalRef.current = setInterval(() => {
            setCount(c => c + 1);
        }, 1000);
    }

    function stopTimer() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;  // Reset ref after stopping but count if has been incremented then restarting the timer will increment the count from where it has stopped.
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    )
}


// 3. Forwarding Refs
const CustomInput = forwardRef((props, ref) => (
    <input ref={ref} {...props} />
))

export function MyForwardRef() {
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    return (
        <div>
            <CustomInput ref={inputRef} placeholder="Type here..." />
            <button onClick={() => inputRef.current.focus()}>Focus</button>
        </div>
    )
}


// 4. Refs for all input types
export function InputDemoRef() {
    const textRef = useRef(null);
    const checkboxRef = useRef(null);
    const radioRef = useRef(null);
    const fileRef = useRef(null);
    const numRef = useRef(null);

    return (
        <div style={{ padding: "20px" }}>
            {/* Text Input */}
            <h3>Text Input</h3>
            <input type="text" ref={textRef} placeholder="Type something..." />
            <div style={{ margin: "10px" }}>
                <button onClick={() => textRef.current.focus()}>Focus</button>
                <button onClick={() => textRef.current.blur()}>Blur</button>
                <button onClick={() => textRef.current.select()}>Select Text</button>
                <button onClick={() => textRef.current.setSelectionRange(0, 5)}>Select First 5</button>
                <button onClick={() => textRef.current.value = "Hello World"}>Set Value(Hello World)</button>
                <button onClick={() => textRef.current.value = ""}>Reset Value</button>
                <button onClick={() => (textRef.current.disabled = !textRef.current.disabled)}>Toggle Disable</button>
            </div>

            {/* Checkbox */}
            <h3 style={{ margin: "20px" }}>Checkbox</h3>
            <input type="checkbox" ref={checkboxRef} /> Accept Terms
            <div>
                {/* on clicking button set checkboxRef to check */}
                <button onClick={() => (checkboxRef.current.checked = true)}>Check</button>
                <button onClick={() => (checkboxRef.current.checked = false)}>Uncheck</button>
                <button onClick={() => alert(checkboxRef.current.checked)}>Show Checked State</button>
            </div>

            {/* Radio Button */}
            <h3 style={{ margin: "20px" }}>Radio Button</h3>
            <input type="radio" ref={radioRef} name="demoRadio" /> Option A
            <div style={{ marginTop: "10px" }}>
                <button onClick={() => (radioRef.current.checked = true)}>Select Radio</button>
                <button onClick={() => (radioRef.current.checked = false)}>Unselect Radio</button>
                <button onClick={() => alert(radioRef.current.checked)}>Show Selected State</button>
            </div>


            {/* File Input */}
            <h3 style={{ marginTop: "20px" }}>File Input</h3>
            <input type="file" ref={fileRef} />
            <div>
                <button onClick={() => fileRef.current.click()}>Open File Picker</button>
                <button onClick={() => alert(fileRef.current.files.length > 0 ? `Selected file: ${fileRef.current.files[0].name}` : "No file selected")}>
                    Show Selected File
                </button>
            </div>

            {/* Number Input */}
            <h3 style={{ marginTop: "20px" }}>Number Input</h3>
            <input type="number" ref={numRef} />
            <div style={{ marginTop: "10px" }}>
                <button onClick={() => numRef.current.stepUp()}>Step Up</button>
                <button onClick={() => numRef.current.stepDown()}>Step Down</button>
                <button onClick={() => alert(numRef.current.value)}>
                    Show Current Value
                </button>
            </div>
        </div>
    )
}


// 5. Use refs to measure the width/height of a DOM element.
export function MeasureBox() {
    const boxRef = useRef();

    useEffect(() => {
        if (boxRef.current) {
            console.log("Width:", boxRef.current.offsetWidth);
            console.log("Height:", boxRef.current.offsetHeight);
        }
    }, [])

    return (
        <div ref={boxRef} style={{ width: "200px", height: "100px", background: "lightblue" }}>
            Box
        </div>
    )
}


// 6. Integrate a third‑party library (like Chart.js) using refs to attach to a canvas element.
export function ChartComponent() {
    // Create canvas reference
    const canvasRef = useRef();

    // create chart reference to store chart instance
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");

        // create chart
        chartRef.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["A", "B", "C"],
                datasets: [{
                    label: "Values",
                    data: [12, 19, 3],
                    backgroundColor: "blue"
                }]
            }
        })

        // cleanup: destroy chart when component unmounts or re-renders
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        }

    }, [])

    return <canvas ref={canvasRef} width={400} height={200} marginTop={30}></canvas>
}


// 7. Change/Update chart data dynamically
export function ChartComponent2() {
    const canvasRef = useRef();
    const chartRef = useRef(null);
    const [values, setValues] = useState([12, 19, 3]);

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");

        chartRef.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["A", "B", "C"],
                datasets: [{
                    label: "Values",
                    data: values,
                    backgroundColor: "lightgreen"
                }]
            }
        })

        return () => chartRef.current.destroy();

    }, []) // only run once to initialize chart

    // Another useEffect: Whenever vlaues chnage, update chart data
    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.data.datasets[0].data = values;
            chartRef.current.update(); // update the chart reference
        }
    }, [values])  // runs whenever values changes

    return (
        <div>
            <canvas ref={canvasRef} width={400} height={200}></canvas>
            <div>
                <button onClick={() => setValues([5, 10, 15])}>Update Data</button>

                <button onClick={() => setValues([20, 30, 40])}>Another Update</button>
            </div>
        </div>
    )
}


// 8. Handle multiple datasets and update them independently in chart.
export function ChartComponent3() {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    // Two datasets managed in state
    const [dataset1, setDataset1] = useState([12, 19, 3]);
    const [dataset2, setDataset2] = useState([5, 10, 15]);

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");

        chartRef.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["A", "B", "C"],
                datasets: [
                    {
                        label: "Dataset 1",
                        data: dataset1,
                        backgroundColor: "orange"
                    },
                    {
                        label: "Dataset 2",
                        data: dataset2,
                        backgroundColor: "red"
                    }
                ]
            }
        })

        return () => chartRef.current.destroy();   // Before unmount destroy the chart reference
    }, [])  // initialize chart once


    // Update chart when dataset1 changes
    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.data.datasets[0].data = dataset1;
            chartRef.current.update();
        }
    }, [dataset1])

    // Update chart when dataset2 changes
    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.data.datasets[1].data = dataset2;
            chartRef.current.update();
        }
    }, [dataset2])


    return (
        <div>
            <canvas ref={canvasRef} width={400} height={200}></canvas>
            <div>
                <button onClick={() => setDataset1([20, 30, 40])}>Update Dataset 1</button>
                <button onClick={() => setDataset2([7, 14, 21])}>Update Dataset 2</button>
            </div>
        </div>
    )
}


// 9. Add/Remove datasets dynamically at runtime and change chart types.
export function ChartComponent4() {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    const chartTypes = ["bar", "line", "pie", "doughnut", "radar"]; // available chart types
    const [chartTypeIndex, setChartTypeIndex] = useState(0);

    // Manage datasets in state
    const [datasets, setDatasets] = useState([
        {
            label: "Dataset 1",
            data: [12, 19, 3],
            backgroundColor: "orange"
        },
        {
            label: "Dataset 2",
            data: [5, 10, 15],
            backgroundColor: "blue"
        }
    ]);

    // Manage labels in state
    const [labels, setLabels] = useState(["Label 1", "Label 2", "Label 3"]);

    // Manage effects
    useEffect(() => {
        // Get the 2d context for canvas reference
        const ctx = canvasRef.current.getContext("2d");

        chartRef.current = new Chart(ctx, {
            type: chartTypes[chartTypeIndex],
            data: {
                labels: labels,
                datasets: datasets
            }
        });

        return () => chartRef.current.destroy();

    }, []); // initialize chart once

    // Update chart when type changes
    useEffect(() => {
        if(chartRef.current) {
            chartRef.current.config.type = chartTypes[chartTypeIndex]; // change chart type
            chartRef.current.update();
        }
    }, [chartTypeIndex]); // runs when chartTypeIndex changes

    // Update chart when labels or datasets change
    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.data.labels = labels;
            chartRef.current.data.datasets = datasets;
            chartRef.current.update();
        }
    }, [labels, datasets]); // runs whenver labels or datasets changes


    // Add a new dataset dynamically
    function addDataset() {
        const newIndex = datasets.length + 1;  // get next index to be added using existing datasets
        const newDataset = {
            label: `Dataset ${newIndex}`,
            data: Array(labels.length + 1).fill(0).map(() => Math.floor(Math.random() * 20)),
            backgroundColor: ["red", "green", "purple", "cyan"][newIndex % 4]
        };

        setDatasets([...datasets, newDataset]);
    };

    // Remove the last dataset
    function removeDataset() {
        if (datasets.length > 0) {
            setDatasets(datasets.slice(0, -1)); // Here slice() slices the datasets and returns values expect the last value
        }
    };

    // Add new label dynamically
    function addLabel() {
        const newLabel = `Label ${labels.length + 1}`;
        const newLabels = [...labels, newLabel];

        // Add a random value for each dataset corresponding to the new label
        const newDatasets = datasets.map((ds) => ({
            ...ds,
            data: [...ds.data, Math.floor(Math.random() * 20)]  // Override data property: “For every dataset, copy it, then extend its data array by adding one random number at the end.”
        }));
        // newDatasets contains all the previous datasets and another new dataset when label is added

        setLabels(newLabels);
        setDatasets(newDatasets);
    }

    
    // Remove the last label
    function removeLabel() {
        if (labels.length > 0) {
            const newLabels = labels.slice(0, -1);
            const newDatasets = datasets.map((ds) => ({
                ...ds,
                data: ds.data.slice(0, -1),  // Override the data property in each datasets and decrement the data array values by one from end.
            }));

            setLabels(newLabels);
            setDatasets(newDatasets);
        }
    }

    // Cycle through chart types
    function toggleChartType() {
        setChartTypeIndex((prev) => (prev + 1) % chartTypes.length);
    }

    return (
        <div>
            <canvas ref={canvasRef} width={400} height={200}></canvas>
            <div>
                <button onClick={addDataset}>Add Dataset</button>
                <button onClick={removeDataset}>Remove Dataset</button>
                <button onClick={addLabel}>Add Label</button>
                <button onClick={removeLabel}>Remove Label</button>
                <button onClick={toggleChartType}>Toggle Chart Type (Current: {chartTypes[chartTypeIndex]})</button>
            </div>
        </div>
    )
}