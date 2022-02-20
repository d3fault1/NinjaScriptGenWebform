(function ($) {

    //#region html element variables
    var bars_ago =
        `<div id="bars-ago-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Bars Ago</label>
                    <input type="number" id="bars-ago" class="form-input"
                        placeholder="Enter Bars Ago">
                </div>
            </div>
        </div>
    </div>`;

    var offset =
        `<div id="offset-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Offset Type</label>

                    <select id="offset-type" class="form-select">
                        <option value="0">Arithmetic</option>
                        <option value="2">Pips</option>
                        <option value="1">Percent</option>
                        <option value="3">Ticks</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Offset</label>
                    <div class="row">
                        <div class="columns large-3">
                            <select id="offset-sign" class="form-select">
                                <option value="0">+</option>
                                <option value="1">-</option>
                                <option value="2">*</option>
                                <option value="3">/</option>
                            </select>
                        </div>
                        <div class="columns large-9">
                            <input type="number" id="offset-value" class="form-input"
                                placeholder="Enter Offset">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    var price_type =
        `<div id="price-type-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Price Type</label>

                    <select id="price-type" class="form-select">
                        <option value="4">Open</option>
                        <option value="0">Close</option>
                        <option value="1">High</option>
                        <option value="3">Median</option>
                        <option value="2">Low</option>
                        <option value="5">Typical</option>
                        <option value="6">Weighted</option>
                    </select>
                </div>
            </div>
        </div>
    </div>`;

    var plot_on_chart =
        `<div id="plot-on-chart-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Plot On Chart</label>

                    <select id="plot-on-chart" class="form-select">
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                </div>
            </div>
        </div>
    </div>`;

    var param_period =
        `<div id="param-period-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Period</label>
                    <input type="number" id="param-period" class="form-input"
                        placeholder="Enter Period">
                </div>
            </div>
        </div>
    </div>`;

    var param_no_std_dev =
        `<div id="param-no-std-dev-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">No. of Standard Deviations</label>
                    <input type="number" id="param-no-std-dev" class="form-input"
                        placeholder="Enter No. of Standard Deviations">
                </div>
            </div>
        </div>
    </div>`;

    var param_smooth =
        `<div id="param-smooth-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Smooth</label>
                    <input type="number" id="param-smooth" class="form-input"
                        placeholder="Enter Smooth">
                </div>
            </div>
        </div>
    </div>`;

    var param_fast =
        `<div id="param-fast-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Fast</label>
                    <input type="number" id="param-fast" class="form-input"
                        placeholder="Enter Fast">
                </div>
            </div>
        </div>
    </div>`;

    var param_slow =
        `<div id="param-slow-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Slow</label>
                    <input type="number" id="param-slow" class="form-input"
                        placeholder="Enter Slow">
                </div>
            </div>
        </div>
    </div>`;

    var param_ma_period =
        `<div id="param-ma-period-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Moving Avg. Period</label>
                    <input type="number" id="param-ma-period" class="form-input"
                        placeholder="Enter Moving Avg. Period">
                </div>
            </div>
        </div>
    </div>`;

    var param_roc_period =
        `<div id="param-roc-period-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Rate of Change Period</label>
                    <input type="number" id="param-roc-period" class="form-input"
                        placeholder="Enter Rate of Change Period">
                </div>
            </div>
        </div>
    </div>`;

    var param_offset_multiplier =
        `<div id="param-offset-multiplier-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Offset Multiplier</label>
                    <input type="number" id="param-offset-multiplier" class="form-input"
                        placeholder="Enter Offset Multiplier">
                </div>
            </div>
        </div>
    </div>`;

    var param_period_d =
        `<div id="param-period-d-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Period D</label>
                    <input type="number" id="param-period-d" class="form-input"
                        placeholder="Enter Period D">
                </div>
            </div>
        </div>
    </div>`;

    var param_period_k =
        `<div id="param-period-k-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Period K</label>
                    <input type="number" id="param-period-k" class="form-input"
                        placeholder="Enter Period K">
                </div>
            </div>
        </div>
    </div>`;

    var param_strength =
        `<div id="param-strength-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Strength</label>
                    <input type="number" id="param-strength" class="form-input"
                        placeholder="Enter Strength">
                </div>
            </div>
        </div>
    </div>`;

    var param_intermediate =
        `<div id="param-intermediate-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Intermediate</label>
                    <input type="number" id="param-intermediate" class="form-input"
                        placeholder="Enter Intermediate">
                </div>
            </div>
        </div>
    </div>`;

    var param_deviation_val =
        `<div id="param-deviation-val-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Deviation Value</label>
                    <input type="number" id="param-deviation-val" class="form-input"
                        placeholder="Enter Deviation Value">
                </div>
            </div>
        </div>
    </div>`;

    var param_high_low =
        `<div id="param-high-low-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Use High Low</label>

                    <select id="param-high-low" class="form-select">
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                </div>
            </div>
        </div>
    </div>`;

    var param_dev_type =
        `<div id="param-dev-type-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Deviation Type</label>

                    <select id="param-dev-type" class="form-select">
                        <option value="0">Points</option>
                        <option value="1">Percent</option>
                    </select>
                </div>
            </div>
        </div>
    </div>`;

    var param_pivot_range =
        `<div id="param-pivot-range-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Pivot Range</label>

                    <select id="param-pivot-range" class="form-select">
                        <option value="0">Daily</option>
                        <option value="1">Weekly</option>
                        <option value="2">Monthly</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var param_hlc_calc_mode =
        `<div id="param-hlc-calc-mode-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">HLC Calculation Mode</label>

                    <select id="param-hlc-calc-mode" class="form-select">
                        <option value="0">Intraday</option>
                        <option value="1">Daily Bars</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var plot_bollinger =
        `<div id="plot-bollinger-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value Plot</label>

                    <select id="plot-bollinger" class="form-select">
                        <option value="2">Lower</option>
                        <option value="1">Middle</option>
                        <option value="0">Upper</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var plot_current_ohl =
        `<div id="plot-current-ohl-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value Plot</label>

                    <select id="plot-current-ohl" class="form-select">
                        <option value="0">Current Open</option>
                        <option value="1">Current High</option>
                        <option value="2">Current Low</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var plot_fibonacci_pivots =
        `<div id="plot-fibonacci-pivots-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value Plot</label>

                    <select id="plot-fibonacci-pivots" class="form-select">
                        <option value="0">Pp</option>
                        <option value="1">R1</option>
                        <option value="2">R2</option>
                        <option value="3">R3</option>
                        <option value="4">S1</option>
                        <option value="5">S2</option>
                        <option value="6">S3</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var plot_keltner_channel =
        `<div id="plot-keltner-channel-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value Plot</label>

                    <select id="plot-keltner-channel" class="form-select">
                        <option value="2">Lower</option>
                        <option value="1">Midline</option>
                        <option value="0">Upper</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var plot_macd =
        `<div id="plot-macd-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value Plot</label>

                    <select id="plot-macd" class="form-select">
                        <option value="0">Avg</option>
                        <option value="1">MACD</option>
                        <option value="2">Diff</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var plot_prior_day_ohlc =
        `<div id="plot-prior-day-ohlc-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value Plot</label>

                    <select id="plot-prior-day-ohlc" class="form-select">
                        <option value="0">Prior Open</option>
                        <option value="2">Prior High</option>
                        <option value="3">Prior Low</option>
                        <option value="1">Prior Close</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var plot_rsi =
        `<div id="plot-rsi-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value Plot</label>

                    <select id="plot-rsi" class="form-select">
                        <option value="0">Avg</option>
                        <option value="1">RSI</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var plot_stochastics =
        `<div id="plot-stochastics-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value Plot</label>

                    <select id="plot-stochastics" class="form-select">
                        <option value="0">D</option>
                        <option value="1">K</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var plot_swing =
        `<div id="plot-swing-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value Plot</label>

                    <select id="plot-swing" class="form-select">
                        <option value="0">Swing High</option>
                        <option value="1">Swing Low</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var plot_zigzag =
        `<div id="plot-zigzag-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value Plot</label>

                    <select id="plot-zigzag" class="form-select">
                        <option value="0">ZigZag High</option>
                        <option value="1">ZigZag Low</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var var_type =
        `<div id="var-type-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Type</label>

                    <select id="var-type" class="form-select">
                        <option value="9">Integer</option>
                        <option value="14">Double</option>
                        <option value="16">Time</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var day_of_week =
        `<div id="val-day-of-week-block">
        <div class="row">
            <columns class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Day Of Week</label>
                    <select id="val-day-of-week" class="form-select">
                        <option value="0">Sunday</option>
                        <option value="1">Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="5">Friday</option>
                        <option value="6">Saturday</option>
                    </select>
                </div>
            </columns>
        </div>
    </div>`;

    var var_name =
        `<div id="var-name-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Name</label>
                    <input type="text" id="var-name" class="form-input"
                        placeholder="Enter Name">
                </div>
            </div>
        </div>
    </div>`;

    var var_val_num =
        `<div id="var-val-num-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value</label>
                    <input type="number" id="var-val-num" class="form-input"
                        placeholder="Enter Value">
                </div>
            </div>
        </div>
    </div>`;

    var var_val_time =
        `<div id="var-val-time-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value</label>
                    <input type="time" id="var-val-time" class="form-input"
                        placeholder="Enter Value">
                </div>
            </div>
        </div>
    </div>`;

    var var_val_date =
        `<div id="var-val-date-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Value</label>
                    <input type="date" id="var-val-date" class="form-input"
                        placeholder="Enter Date">
                </div>
            </div>
        </div>
    </div>`;

    var var_val_min =
        `<div id="var-val-min-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Minimum Value</label>
                    <input type="number" id="var-val-min" class="form-input"
                        placeholder="Enter Value">
                </div>
            </div>
        </div>
    </div>`;

    var var_description =
        `<div id="var-description-block">
        <div class="row">
            <div class="columns large-12">
                <div class="form-field">
                    <label class="form-label">Description</label>
                    <input type="text" id="var-description" class="form-input"
                        placeholder="Enter Description">
                </div>
            </div>
        </div>
    </div>`;
    //#endregion

    var form_json = {};
    var defaults = {};
    var instruments = [];
    var inputs = [];
    var variables = [];
    var conditionsets = [];
    var compares = [];
    var operations = [];
    var targetactions = [];

    var stepStore = -1;
    var currentStep = 1;
    var maxStep = 7;

    function webForm() {

        generateBaseJson();

        //#region Extras   
        // $('#name').blur(function (e) {
        //     e.preventDefault();

        //     var value = $(this).val();
        //     if (value === 'a') {
        //         $('#email').val('a@gmail.com');
        //     }
        // });
        //#endregion

        $('#next').click(onNextClick);
        $('#prev').click(onPrevClick);
        $('.btn-condition-add').click(onConditionAddClick);

        mainCondition('#first-object-options');
        mainCondition('#second-object-options');

        $('#first-object-options').empty().append(price_type, bars_ago, plot_on_chart, offset);
        $('#second-object-options').empty().append(price_type, bars_ago, plot_on_chart, offset);

    }

    function onNextClick(e) {
        e.preventDefault();

        var resetCompares = true;

        finalizeStep(currentStep);
        if (currentStep == 0) {
            currentStep = stepStore;
            resetCompares = false;
        }
        else currentStep++;
        if (currentStep > maxStep) {
            finalizeJson();
            submitJson();
            currentStep--;
        } else {
            initializeStep(currentStep, resetCompares);
        }
    }

    function onPrevClick(e) {
        e.preventDefault();

        var resetCompares = true;

        if (currentStep != 0) finalizeStep(currentStep);

        if (currentStep == 0) {
            currentStep = stepStore;
            resetCompares = false;
        }
        else currentStep--;
        initializeStep(currentStep, resetCompares);
    }

    function onConditionAddClick(e) {
        e.preventDefault();

        stepStore = currentStep;
        currentStep = 0;
        initializeStep(currentStep, false);
    }

    function onConditionRemoveClick(e) {
        e.preventDefault();

        var id = +($(this).attr('id').split('')[1]);
        if (compares.length > id) compares.splice(id, 1);
        $(this).closest('tr').remove();
    }

    function submitJson() {
        $('#main-data-input').val(JSON.stringify(form_json));	
        $('#webform').submit();
    }

    function serializeData(step) {
        switch (step) {
            case 0:
                serializeCompares();
                break;
            case 1:
                var instrument = {};
                form_json['Name'] = $('#name').val();
                form_json['Description'] = $('#description').val();
                instrument['Name'] = $('#instrument-name').val();
                instrument['Type'] = $('#instrument-type').val();
                instrument['Value'] = $('#instrument-value').val();
                instruments.push(instrument);
                break;
            case 2:
                defaults['Calculate'] = $('#calculate').val();
                defaults['ExitOnSessionClose'] = $('#exit-on-session').val();
                defaults['ContractsPerEntry'] = $('#contracts-per-entry').val();
                break;
            case 3:
                var targetaction = {};
                targetaction['TargetType'] = 1;
                targetaction['Type'] = $('#stoploss-type').val();
                targetaction['Value'] = $('#stoploss-value').val();
                targetactions.push(targetaction);
                var targetaction = {};
                targetaction['TargetType'] = 0;
                targetaction['Type'] = $('#profit-type').val();
                targetaction['Value'] = $('#profit-value').val();
                targetactions.push(targetaction);
                break;
            case 4:
                var pos = step - 4;
                var conditionset = {};
                var operation = {};
                operation['$type'] = 'NinjaScriptGenerator.Long, NinjaScriptGenerator';
                operation['Action'] = 0;
                operation['Quantity'] = 0;
                operations.push(operation);
                conditionset['Compares'] = compares.length > 0 ? JSON.parse(JSON.stringify(compares)) : null;
                conditionset['Operations'] = JSON.parse(JSON.stringify(operations));
                conditionset['ConditionType'] = $(`#condition-type-${currentStep}`).val();
                if (conditionsets.length > pos) conditionsets[pos] = conditionset;
                else conditionsets.push(conditionset);
                break;
            case 5:
                var pos = step - 4;
                var conditionset = {};
                var operation = {};
                operation['$type'] = 'NinjaScriptGenerator.Long, NinjaScriptGenerator';
                operation['Action'] = 1;
                operation['Quantity'] = 0;
                operations.push(operation);
                conditionset['Compares'] = compares.length > 0 ? JSON.parse(JSON.stringify(compares)) : null;
                conditionset['Operations'] = JSON.parse(JSON.stringify(operations));
                conditionset['ConditionType'] = $(`#condition-type-${currentStep}`).val();
                if (conditionsets.length > pos) conditionsets[pos] = conditionset;
                else conditionsets.push(conditionset);
                break;
            case 6:
                var pos = step - 4;
                var conditionset = {};
                var operation = {};
                operation['$type'] = 'NinjaScriptGenerator.Short, NinjaScriptGenerator';
                operation['Action'] = 0;
                operation['Quantity'] = 0;
                operations.push(operation);
                conditionset['Compares'] = compares.length > 0 ? JSON.parse(JSON.stringify(compares)) : null;
                conditionset['Operations'] = JSON.parse(JSON.stringify(operations));
                conditionset['ConditionType'] = $(`#condition-type-${currentStep}`).val();
                if (conditionsets.length > pos) conditionsets[pos] = conditionset;
                else conditionsets.push(conditionset);
                break;
            case 7:
                var pos = step - 4;
                var conditionset = {};
                var operation = {};
                operation['$type'] = 'NinjaScriptGenerator.Short, NinjaScriptGenerator';
                operation['Action'] = 1;
                operation['Quantity'] = 0;
                operations.push(operation);
                conditionset['Compares'] = compares.length > 0 ? JSON.parse(JSON.stringify(compares)) : null;
                conditionset['Operations'] = JSON.parse(JSON.stringify(operations));
                conditionset['ConditionType'] = $(`#condition-type-${currentStep}`).val();
                if (conditionsets.length > pos) conditionsets[pos] = conditionset;
                else conditionsets.push(conditionset);
                break;
            default:
                break;
        }
    }

    function serializeCompares() {
        var compare = {};
        var firstobject = {};
        var secondobject = {};
        var firstcompare = $('#first-compare').val();
        var secondcompare = $('#second-compare').val();

        firstobject['$type'] = `NinjaScriptGenerator.${firstcompare}, NinjaScriptGenerator`;
        secondobject['$type'] = `NinjaScriptGenerator.${secondcompare}, NinjaScriptGenerator`;

        $('#first-object-options').find('input, select').each(function (index, el) {
            firstobject[getKeyName($(el).attr('id'), firstcompare)] = $(el).val();
        });

        $('#second-object-options').find('input, select').each(function (index, el) {
            secondobject[getKeyName($(el).attr('id'), secondcompare)] = $(el).val();
        });

        compare['FirstObject'] = firstobject;
        compare['SecondObject'] = secondobject;
        compare['Operation'] = $('#comparisons').val();
        compares.push(compare);
    }

    function generateBaseJson() {
        form_json['Name'] = "";
        form_json['Description'] = "";
        form_json['Defaults'] = defaults;
        form_json['Instruments'] = instruments;
        form_json['Inputs'] = inputs;
        form_json['Variables'] = variables;
        form_json['ConditionSets'] = conditionsets;
        form_json['TargetActions'] = targetactions;
    }

    function finalizeJson() {
        inputs.length = 0;
        variables.length = 0;
        $(conditionsets).each(function (index, set) {
            $(set['Compares']).each(function (index, comp) {
                var firstobject = comp['FirstObject'];
                var secondobject = comp['SecondObject'];
                var firstcompare = firstobject['$type'].split(',')[0].split('.')[1];
                var secondcompare = secondobject['$type'].split(',')[0].split('.')[1];
                if (firstcompare == 'Input') {
                    var input = firstobject;
                    delete input['$type'];
                    var ind = inputs.indexOf(item => item.Name == input.Name);
                    if (ind === -1) {
                        inputs.push(input);
                    }
                    else {
                        inputs[ind] = input;
                    }
                }

                if (secondcompare == 'Input') {
                    var input = secondobject;
                    delete input['$type'];
                    var ind = inputs.find(item => item.Name == input.Name);
                    if (ind === -1) {
                        inputs.push(input);
                    }
                    else {
                        inputs[ind] = input;
                    }
                }

                if (firstcompare == 'Variable') {
                    var variable = firstobject;
                    delete variable['$type'];
                    var ind = variables.find(item => item.Name == input.Name);
                    if (ind === -1) {
                        variables.push(variable);
                    }
                    else {
                        variables[ind] = variable;
                    }
                }

                if (secondcompare == 'Variable') {
                    var variable = secondobject;
                    delete variable['$type'];
                    var ind = variables.find(item => item.Name == input.Name);
                    if (ind === -1) {
                        variables.push(variable);
                    }
                    else {
                        variables[ind] = variable;
                    }
                }
            });
        });
        form_json['Inputs'] = inputs.length > 0 ? inputs : null;
        form_json['Variables'] = variables.length > 0 ? variables : null;
    }

    function finalizeStep(step) {
        serializeData(step);
    }

    function initializeStep(step, resetCompares) {
        switch (step) {
            case 0:
                break;
            case 1:
                instruments.length = 0;
                break;
            case 2:
                break;
            case 3:
                targetactions.length = 0;
                break;
            case 4:
            case 5:
            case 6:
            case 7:
                if (resetCompares) {
                    compares = [];
                    operations = [];
                    updateStepData(step);
                }
                var compdup = JSON.parse(JSON.stringify(compares));
                updateCompareTable(compdup, step);
                break;
            default:
                break;
        }

        if (step == 0) {

            $('#first-compare').val('ADL');
            $('#second-compare').val('ADL');

            $('#next').html('OK');
            $('#prev').html('Cancel');
        }
        else if (step == 7) {
            $('#next').html('Submit');
        }
        else {
            $('#next').html('Next');
            $('#prev').html('Previous');
        }

        if (step == 1) {
            $('#prev').addClass('disabled');
        }
        else {
            $('#prev').removeClass('disabled');
        }
        showWebformStep(step);
    }

    function updateStepData(step) {
        if (conditionsets.length > step - 4) {
            compares = JSON.parse(JSON.stringify(conditionsets[step - 4]['Compares']));
        }
        else compares = [];
    }

    function updateCompareTable(compArr, step) {
        $(`#table-${step}`).empty();
        $(compArr).each(function (index, value) {
            var fname = value['FirstObject']['$type'].split(',')[0].split('.')[1];
            var sname = value['SecondObject']['$type'].split(',')[0].split('.')[1];
            var opr = '';
            $('#comparisons').find('option').each(function (index, el) {
                if ($(el).attr('value') == value['Operation']) {
                    opr = $(el).text();
                    return false;
                }
            });
            $(`#table-${step}`).append(
                `<tr>
                <td class="condition-row-object">${fname}</td>
                <td class="condition-row-cmp">${opr}</td>
                <td class="condition-row-object">${sname}</td>
                <td class="condition-row-btn">
                    <button class="button button-small" id="${step.toString() + index.toString()}">
                        <img src="image/cross.png" alt="X"/>
                    </button>
                </td>
            </tr>`
            );

            $(`#${step.toString() + index.toString()}`).click(onConditionRemoveClick);
        });
    }

    function getKeyName(id, compareType) {
        switch (id) {
            case 'bars-ago':
                return 'BarsAgo';
            case 'offset-type':
                return 'OffsetType';
            case 'offset-sign':
                return 'Operator';
            case 'offset-value':
                return 'Offset';
            case 'price-type':
                return 'Price';
            case 'plot-on-chart':
                return 'PlotOnChart';
            case 'param-period':
                return 'Period';
            case 'param-no-std-dev':
                return 'NumStdDev';
            case 'param-smooth':
                return 'Smooth';
            case 'param-fast':
                return 'Fast';
            case 'param-slow':
                return 'Slow';
            case 'param-ma-period':
                return 'MAPeriod';
            case 'param-roc-period':
                return 'ChangeRatePeriod';
            case 'param-offset-multiplier':
                return 'OffsetMultiplier';
            case 'param-period-d':
                return 'PeriodD';
            case 'param-period-k':
                return 'PeriodK';
            case 'param-strength':
                return 'Strength';
            case 'param-intermediate':
                return 'Intermediate';
            case 'param-deviation-val':
                return 'Deviation';
            case 'param-high-low':
                return 'UseHighLow';
            case 'param-dev-type':
                return 'DeviationType';
            case 'param-pivot-range':
                return 'Range';
            case 'param-hlc-calc-mode':
                return 'CalcMode';
            case 'val-day-of-week':
                return 'DayOfWeek';
            case 'plot-bollinger':
            case 'plot-current-ohl':
            case 'plot-fibonacci-pivots':
            case 'plot-keltner-channel':
            case 'plot-macd':
            case 'plot-pivot':
            case 'plot-prior-day-ohlc':
            case 'plot-rsi':
            case 'plot-stochastics':
            case 'plot-swing':
            case 'plot-zigzag':
                return 'ValuePlot';
            case 'var-type':
                return 'Type';
            case 'var-name':
                return 'Name';
            case 'var-val-num':
                return 'Value';
            case 'var-val-time':
                if (compareType == 'Variable') return 'Value'
                else return 'Time';
            case 'var-val-min':
                return 'Minimum';
            case 'var-val-date':
                return 'Date';
            case 'var-description':
                return 'Description';
            default:
                return id;
        }
    }

    function validateStep(stepNumber) {
        return true;
    }

    function mainCondition(selector) {
        var compare;
        if (selector === '#first-object-options') compare = '#first-compare';
        else if (selector === '#second-object-options') compare = '#second-compare';

        $(compare).on('change', function (e) {
            $(selector).empty();
            switch ($(this).val()) {
                case 'ADL':
                    $(selector).append(price_type, bars_ago, plot_on_chart, offset);
                    break;
                case 'ADX':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_period, offset);
                    break;
                case 'Bollinger':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_no_std_dev, param_period, plot_bollinger, offset);
                    break;
                case 'BOP':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_smooth, offset);
                    break;
                case 'ChaikinOscillator':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_fast, param_slow, offset);
                    break;
                case 'ChaikinVolatility':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_ma_period, param_roc_period, offset);
                    break;
                case 'CurrentDayOHL':
                    $(selector).append(price_type, bars_ago, plot_on_chart, plot_current_ohl, offset);
                    break;
                case 'DEMA':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_period, offset);
                    break;
                case 'DoubleStochastics':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_period, offset);
                    break;
                case 'EMA':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_period, offset);
                    break;
                case 'FibonacciPivots':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_pivot_range, param_hlc_calc_mode, plot_fibonacci_pivots, offset);
                    break;
                case 'KeltnerChannel':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_offset_multiplier, param_period, plot_keltner_channel, offset);
                    break;
                case 'MACD':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_fast, param_slow, param_smooth, plot_macd, offset);
                    break;
                case 'MAX':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_period, offset);
                    break;
                case 'MIN':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_period, offset);
                    break;
                case 'Pivots':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_pivot_range, param_hlc_calc_mode, plot_fibonacci_pivots, offset);
                    break;
                case 'PriorDayOHLC':
                    $(selector).append(price_type, bars_ago, plot_on_chart, plot_prior_day_ohlc, offset);
                    break;
                case 'RSI':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_period, param_smooth, plot_rsi, offset);
                    break;
                case 'SMA':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_period, offset);
                    break;
                case 'StandardDeviation':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_period, offset);
                    break;
                case 'Stochastics':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_period_d, param_period_k, param_smooth, plot_stochastics, offset);
                    break;
                case 'StochasticsFast':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_period_d, param_period_k, plot_stochastics, offset);
                    break;
                case 'Swing':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_strength, plot_swing, offset);
                    break;
                case 'UltimateOscillator':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_fast, param_intermediate, param_slow, offset);
                    break;
                case 'VOL':
                    $(selector).append(price_type, bars_ago, plot_on_chart, offset);
                    break;
                case 'ZigZag':
                    $(selector).append(price_type, bars_ago, plot_on_chart, param_dev_type, param_deviation_val, param_high_low, plot_zigzag, offset);
                    break;
                case 'Ask':
                    $(selector).append(offset);
                    break;
                case 'Bid':
                    $(selector).append(offset);
                    break;
                case 'Close':
                    $(selector).append(bars_ago, offset);
                    break;
                case 'High':
                    $(selector).append(bars_ago, offset);
                    break;
                case 'Median':
                    $(selector).append(bars_ago, offset);
                    break;
                case 'Low':
                    $(selector).append(bars_ago, offset);
                    break;
                case 'AskVolume':
                    //$(selector).append();
                    break;
                case 'BidVolume':
                    //$(selector).append();
                    break;
                case 'Volume':
                    $(selector).append(bars_ago);
                    break;
                case 'DateValue':
                    $(selector).append(var_val_date);
                    break;
                case 'TimeValue':
                    $(selector).append(var_val_time);
                    break;
                case 'DayofWeek':
                    $(selector).append(day_of_week);
                    break;
                case 'Input':
                    $(selector).append(var_name, var_type, var_val_num, var_val_min, var_description);
                    typeCondition();
                    break;
                case 'Variable':
                    $(selector).append(var_name, var_type, var_val_num);
                    break;
            }
        });

    }

    function typeCondition() {

        $('#var-type').on('change', function (e) {

            if ($(this).val() == 16) {
                $('#var-val-min-block').remove();
            }
            else {
                $('#var-val-num-block').after(var_val_min);
                // typeCondition();
            }
        });

    }

    function showWebformStep() {
        $('.webform-section').removeClass('show');
        $(`#step-${currentStep}`).addClass('show');

        if (currentStep === 1) {
            $('#prev').addClass('disabled');
        } else {
            $('#prev').removeClass('disabled');
        }
    }

    function showFieldError(field) {
        field.closest('.form-field').addClass('error');
    }

    function removeFieldError(field) {
        field.closest('.form-field').removeClass('error');
    }

    $(document).ready(function () {
        webForm();
    });
})(jQuery);