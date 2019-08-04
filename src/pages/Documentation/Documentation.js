import React, { Component } from "react";
import "./Documentation.css";

import { Tab, Col, Row, ListGroup } from "react-bootstrap";

import p_current from "../../resources/pictures/current_beatmap.png";
import p_backup from "../../resources/pictures/backup.png";
import p_cleaner from "../../resources/pictures/cleaner.png";
import p_compl1 from "../../resources/pictures/completionator1.png";
import p_compl2 from "../../resources/pictures/completionator2.png";
import p_compl3 from "../../resources/pictures/completionator3.png";
import p_compl4 from "../../resources/pictures/completionator4.png";
import p_compl5 from "../../resources/pictures/completionator5.jpg";
import p_copier1 from "../../resources/pictures/copier1.png";
import p_merger1 from "../../resources/pictures/merger1.png";
import p_merger2 from "../../resources/pictures/merger2.png";
import p_merger3 from "../../resources/pictures/merger3.png";
import p_merger4 from "../../resources/pictures/merger4.png";
import p_timing1 from "../../resources/pictures/timing1.png";
import p_timing2 from "../../resources/pictures/timing2.png";
import p_timing3 from "../../resources/pictures/timing3.png";
import p_transformer from "../../resources/pictures/transformer.png";

class Documentation extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Tab.Container className="docu-container" defaultActiveKey="#general">
                    <Row>
                        <Col sm={5} md={4} lg={3} xl={2} className="docu-nav">
                            <ListGroup className="docu-listgroup">
                                <ListGroup.Item variant="dark" action href="#general">
                                    General
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark" href="#mapcleaner">
                                    Map Cleaner
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark" href="#property">
                                    Property Transformer
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark" href="#merger">
                                    Slider merger
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark" href="#completer">
                                    Slider Completionator
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark" href="#timing">
                                    Timing Helper
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark" href="#copier">
                                    Hitsound Copier
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark" href="#studio">
                                    Hitsound Studio
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark" href="#preview">
                                    Hitsound Preview Helper
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark" href="#tutorials">
                                    Tutorials
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={7} md={8} lg={9} xl={10} className="docu-content">
                            <Tab.Content>
                                <Tab.Pane eventKey="#general">
                                    <h1 id="cl-general" dir="ltr"><span>General</span></h1>
                                    <p dir="ltr"><span>Mapping Tools is meant to combine all the mapping tools you need into one program.</span></p>
                                    <p dir="ltr"><span>It ensures reliable quality by using shared algorithms, automatic updating and backups.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Mapping tools stores all it&rsquo;s config files in a map inside Documents called Mapping-Tools.</span></p>
                                    <p dir="ltr"><span>It stores the general configs and configs of individual tools separately.</span></p>
                                    <p dir="ltr"><span>The backups and custom Hitsound Studio saves also get saved there by default.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Current map is a global variable which is used by most of the tools. It&rsquo;s a path to the .osu file of a beatmap. This map will be the map that most tools do their work on.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>You can set the current map by clicking on File and then use either Open beatmap or Open current beatmap.&nbsp;</span></p>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Open beatmap will open a file browsing window that defaults to your osu! songs folder.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Open current beatmap will read the memory of your osu! client to get the path to the beatmap that is currently selected in the osu! client. This will not work if osu! is closed, there are multiple osu! clients open or if the path to your osu! folder is configured incorrectly.</span></p>
                                        </li>
                                    </ul>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Generate backup will make a copy of the current map and store it in the backups folder.</span></p>
                                    <p dir="ltr"><span>The backups folder is inside the folder where mapping tools stores all of it&rsquo;s configuration.</span></p>
                                    <p dir="ltr"><span>You can use Options &gt; Open backups folder to easily open the backups folder.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Inside the Tools menu item you can find all the available mapping tools.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>In the About menu item you can find some info about the contributors to mapping tools and the version of mapping tools. There is also a link to the Github.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-getstarted" dir="ltr"><span>Get started</span></h2>
                                    <p dir="ltr"><span>It shows info letting you know how to use a tool from mapping tools.</span></p>
                                    <p dir="ltr"><span>It shows a list of recent maps that were selected as current map paired with the time they were last selected.</span></p>
                                    <p dir="ltr"><span>If you double click on one of the items in the list, it will select that map as the current map.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-preferences" dir="ltr"><span>Preferences&nbsp;</span></h2>
                                    <p dir="ltr"><span>You can find the preferences in the Options menu item.</span></p>
                                    <p dir="ltr"><span>You can:</span></p>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Toggle dark mode</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Set the path to your osu! folder</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Set the path to your songs folder</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Set the path to your backups folder</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Toggle making automatic backups</span></p>
                                        </li>
                                    </ul>
                                    <p><span><span><br /><br /></span></span></p>
                                    <h2 id="cl-textboxes" dir="ltr"><span>Text boxes</span></h2>
                                    <p dir="ltr"><span>All text boxes that want you to input some kind of number have a special way of parsing the text. You can input the number in the form of an equation. For instance &ldquo;1 + 1/4&rdquo; will be interpreted as 1.25. Both dots and commas will be interpreted as decimal separators.</span></p>
                                    <p dir="ltr"><span>If the text cannot be interpreted then it will go to a default value. Most of the time this default value will have the program completely ignore that feature, so there will be no adverse and unexpected results.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>All text boxes that want you to input a path have a folder button next to it that you can use to summon a file browsing dialog.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>All text boxes that want you to input a path to a beatmap also have a download looking button next to it that when you click it will get the current map from your osu! client and put the path in the text box just like how the get current map works.&nbsp;</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-backups" dir="ltr"><span>Backups</span></h2>
                                    <p dir="ltr"><span>Every time you run a tool that changes a beatmap a backup will automatically be made and put in the backups folder. You can disable this in the preferences.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#mapcleaner">
                                    <h1 id="cl-mapcleaner" dir="ltr"><span>Map Cleaner</span></h1>
                                    <p dir="ltr"><span>It cleans the current map of useless greenlines and it also lets you do some other stuff regarding the whole map.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Map cleaner cleans useless greenline stuff by storing all the influences of the timingpoints and then removing all the timingpoints and then rebuilding all the timingpoints in a good way. This means the greenlines automatically get resnapped to the objects that use them.</span></p>
                                    <p dir="ltr"><span>In this process the map or hitsounds must not change in an unexpected way. If that happens please let me know, so I can fix it.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Map has sliderbody volume changes: By checking this you tell map cleaner that any volume changes inside the body of a slider are *intentional* and as such will not be removed by map cleaner.</span></p>
                                    <p dir="ltr"><span>The same works for the other general options.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Resnap objects: This will resnap all the hitobjects and resnap sliderends during the map cleaning process. The resnapping will be done to the snap divisor options.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Resnap bookmarks: This will resnap all bookmarks with the default resnapping method. This is a separate option because some maps like to spam bookmarks at a high frequency and it would be a shame if normal resnapping of hitobjects destroyed your bookmarking masterpiece.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Remove muting: This option removes all volume changes and custom index changes on hitsounds with 5% volume. If any timingpoint has 5% volume, then the volume change and custom index change on that will be removed.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Mute all unclickables: This will put 5% volume on all hitsound events originating from hitobjects that do not involve active player input. Only circles, sliderheads and hold note heads will be audible. This can be used to get better insight on the rhythm of your map or how it plays.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-resnapping" dir="ltr"><span>Resnapping</span></h2>
                                    <p dir="ltr"><span>Resnapping works by moving the time to the nearest tick on the timeline and flooring it to integer. If there is a redline within 10 ms after the time of the hitobject, it will snap to that redline instead. This is to prevent stuff from resnapping to a tick 3 ms before the redline.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Resnapping sliderends is done in two different ways. First method works by taking the duration of the slider and then changing that to the nearest multiple of a snap divisor. This is similar to using ctrl+shift+S on a slider in the vanilla editor. The second method is only used if there is a redline inside the duration of the slider or up to 20 ms after the slider. This will resnap the end time of the slider to the nearest tick using the previously described method. Note that this creates sliders with an integer duration and the exact length deviates with the rounding around the timeline ticks.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>All spinner ends and hold note ends are also resnapped using this second method.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>If the map is in the osu! mania gamemode then resnapping will also resnap the position of the notes to the middle of the columns and to Y = 192.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-timeline" dir="ltr"><span>Timeline</span></h2>
                                    <p dir="ltr"><span>Whenever you run Map Cleaner a little timeline will show all the changes the program made to the timingpoints.</span></p>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Red line means a removed timingpoint</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Orange line means a changed timingpoint</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Green line means a timingpoint addition</span></p>
                                        </li>
                                    </ul>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>If a timingpoint was just moved you will see a red line on the previous offset and a green line on the new offset.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>You can doubleclick any of the lines to go to that time in the editor.</span></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#property">
                                    <h1 id="cl-propertytransformer" dir="ltr"><span>Property Transformer</span></h1>
                                    <p dir="ltr"><span>Multiple and add to properties of all the timingpoints, hitobjects, bookmarks and storyboarded samples of the current map.</span></p>
                                    <p dir="ltr"><span>The new value is the old value times the multiplier plus the offset. The multiplier is the left textbox and the offset is the right textbox. The multiplier gets done first.</span></p>
                                    <p dir="ltr"><span>Resulting values get rounded if they have to be integer.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>If the multiplier can&rsquo;t be parsed then it will default to 1.</span></p>
                                    <p dir="ltr"><span>If the offset can&rsquo;t be parsed then it will default to 0.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-clippingproperties" dir="ltr"><span>Clipping properties</span></h2>
                                    <p dir="ltr"><span>Clip properties will make the properties not go outside of bounds. Properties that have 1x multiplier and 0 offset will not get clipped. The clipping works with the following boundaries:</span></p>
                                    <p dir="ltr"><span>Timingpoints offset: None</span></p>
                                    <p dir="ltr"><span>Timingpoints BPM: 15 - 10000</span></p>
                                    <p dir="ltr"><span>Timingpoints SV: 0.1 - 10</span></p>
                                    <p dir="ltr"><span>Timingpoints custom index: 0 - 100</span></p>
                                    <p dir="ltr"><span>Timingpoints volume: 5 - 100</span></p>
                                    <p dir="ltr"><span>Hitobject time: None</span></p>
                                    <p dir="ltr"><span>Bookmark time: None&nbsp;</span></p>
                                    <p dir="ltr"><span>SB sample time: None&nbsp;</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-filters" dir="ltr"><span>Filters</span></h2>
                                    <p dir="ltr"><span>Filters let you direct the things that get targeted by Property Transformer.&nbsp;</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>The first text box is for matching. All parameters that match that value are able to get transformed. This filter will only be active if the enable filters checkbox is checked and the textbox can be parsed to a number.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>The next filter is a time range. To get targeted by Property Transformer, the object that holds the parameter must have a time greater than or equal to the first value and less than or equal to the second value. The times specified are in milliseconds.</span></p>
                                    <p dir="ltr"><span>If one of the textboxes can&rsquo;t be parsed it will default to negative infinity for the minimum time and positive infinity for the maximum time.</span></p>
                                    <p dir="ltr"><span>The filter is only active if one of the two textboxes can be parsed and the enable filters checkbox is checked.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#merger">
                                    <h1 id="cl-slidermerger" dir="ltr"><span>Slider Merger</span></h1>
                                    <p dir="ltr"><span>Merge 2 or more sliders into one big slider. The pixel length of the resulting slider is the sum of the pixel lengths of the sliders that made it up.</span></p>
                                    <p dir="ltr"><span>This tool works on the current map.</span></p>
                                    <p dir="ltr"><span>For sliders to merge they following things must happen:</span></p>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>There is a slider</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>The next object after that is also a slider</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>The head of the next slider is at most x units away from the last anchor of the first slider where x is the merge connection leniency</span></p>
                                        </li>
                                    </ul>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>If require bookmarks is checked then the program will act like only the objects which have a bookmark on them exist. The bookmark can be on the sliderhead, sliderhead or sliderbody. Just anywhere within the time range of the object.</span></p>
                                    <p dir="ltr"><span>All the sliders involved must be bookmarked for it to work.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Merge connection leniency is the amount of osu! pixels the sliderhead of the second slider can be away from the last anchor of the first slider in order for it to still merge. When the textbox can&rsquo;t be parsed it will default to 0.</span></p>
                                    <p dir="ltr"><span>When a slider is not directly on the last anchor of the previous slider and the distance is within the merge connection leniency, then it will move that second slider along with all it&rsquo;s anchors to be exactly on the last anchor of the first slider.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-bezierconversions" dir="ltr"><span>Bezier conversions</span></h2>
                                    <p dir="ltr"><span>Slider Merger automatically converts all involved sliders into a Bezier type path to be able to merge them.</span></p>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Perfect passthrough sliders become a Bezier path with 3-7 white anchors depending on the central angle. The anchors are generated by getting a pre-generated bezier approximation for that range of central angles, then the central angle gets reduced to the required central angle using the Casteljau&rsquo;s algorithm, then the anchors get scaled and rotated into the right position.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Catmull sliders get converted to Bezier with a simple and fast algorithm. For this every anchor in the catmull slider becomes a red anchor with 2 white anchors around it.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Linear sliders get converted to Bezier by turning all the anchors into red anchors except for the anchors on the ends.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Bezier sliders don&rsquo;t need to get changed.</span></p>
                                        </li>
                                    </ul>
                                    <p><span><span>&nbsp;</span></span></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#completer">
                                    <h1 id="cl-slidercompletionator" dir="ltr"><span>Slider Completionator</span></h1>
                                    <p dir="ltr"><span>Change the pixel length and the duration of sliders without having to deal with SV.&nbsp;</span></p>
                                    <p dir="ltr"><span>This tool works on the current map.</span></p>
                                    <p dir="ltr"><span>If require bookmarks is checked then the program will only target bookmarked sliders. If it&rsquo;s not checked then the program will work on every slider in the current map.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Temporal length sets the duration of the slider in beats. If the textbox can&rsquo;t be parsed then it will not change the duration.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Spatial length sets the pixel length of the slider as a fraction of the complete length of the path defined by the anchors. For example inputting 1 makes the slider go the complete path of the anchors and the sliderend will be exactly on top of the last anchor. Inputting 3 makes for Pencilina sliders. If the textbox can&rsquo;t be parsed then it will not change the pixel length.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#timing">
                                    <h1 id="cl-timinghelper" dir="ltr"><span>Timing Helper</span></h1>
                                    <p dir="ltr"><span>Ever had to time a song with really inconsistent timing? Having to add countless redlines for every slightly off-beat kick?</span></p>
                                    <p dir="ltr"><span>Timing Helper is meant to speed up your timing job by placing the redlines for you. You only have to tell it where exactly all the sounds are.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-howdoesitwork" dir="ltr"><span>How does it work?</span></h2>
                                    <p dir="ltr"><span>What you do is place 'markers' exactly on the correct timing of sounds. These markers can be hit objects, bookmarks, greenlines and redlines (configurable in the GUI).</span></p>
                                    <p dir="ltr"><span>Timing Helper will then adjust BPM and/or add redlines to make every marker be snapped.</span></p>
                                    <p dir="ltr"><span>It will only snap to the snap divisors configured in the GUI</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>To avoid spamming redlines on every marker you can give it a leniency with its timing.</span></p>
                                    <p dir="ltr"><span>The leniency you input is the maximum distance in milliseconds a marker can be from its timeline tick. The tool will then try to snap every marker within that leniency by using the fewest redlines.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Timing Helper will round its BPM values to human-like values as if a human actually typed in the BPMs.</span></p>
                                    <p dir="ltr"><span>Different roundings include:</span></p>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Whole numbers</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Halve numbers</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Tenths</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Hundredths</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Thousandths</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Exact BPM</span></p>
                                        </li>
                                    </ul>
                                    <p dir="ltr"><span>The tool will choose the most rounded value that still gets the required precision.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Unchecking 'Include redlines' will make the tool reconstruct all the redlines. It will still use the redlines to determine the amount of beats in between every marker, but it will remove all the redlines and then make new ones for all the markers.</span></p>
                                    <p dir="ltr"><span>Only use this if you have enough markers to recreate the timing and you want to optimise the redlines.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>By default Timing Helper determines the amount of beats between every marker automatically based on the amount of beats between the markers on the existing timing.</span></p>
                                    <p dir="ltr"><span>Inputting a number of beats in the 'Beats between markers' box will make the tool make timing in a way so there are the inputted amount of beats in between every marker.</span></p>
                                    <p dir="ltr"><span>Only use this if you put a marker every beat or measure to get the overall timing right in a very varying BPM song or if you just want troll timing.</span></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#copier">
                                    <h1 id="cl-hitsoundcopier" dir="ltr"><span>Hitsound Copier</span></h1>
                                    <p dir="ltr"><span>Copies hitsounds from A to B.</span></p>
                                    <p dir="ltr"><span>There are 2 modes. First mode is overwrite everything. This will basically first remove the hitsounds from the map you&rsquo;re copying to and then copy the hitsounds.</span></p>
                                    <p dir="ltr"><span>Second mode is copying only the defined hitsounds. A defined hitsound is when there is something there in the map you&rsquo;re copying from. This mode will copy over all the hitsounds from the map you&rsquo;re copying from. Anything in the map you&rsquo;re copying to that has not been defined in the map you&rsquo;re copying from will not change. For instance muted sliderends will remain there.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Temporal leniency is the maximum amount milliseconds two hitsounds can be away from each other in the two maps to still copy over the hitsounds.</span></p>
                                    <p dir="ltr"><span>The temporal distance between the two hitsounds has to be less than or equal to the temporal leniency.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Sliderbody hitsounds are greenlines in the body of a slider that change custom index or volume during the slider.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-copyingstoryboardedsamples" dir="ltr"><span>Copying storyboarded samples</span></h2>
                                    <p dir="ltr"><span>To copy storyboarded samples simply check the checkbox that says "Copy storyboarded samples".</span></p>
                                    <p dir="ltr"><span>It will add the storyboarded samples from the map you are copying from to the map you are copying to.</span></p>
                                    <p dir="ltr"><span>If the map you are copying to already contains an exact copy of a storyboarded sample in the map you are copying from then that storyboarded sample will not be added.</span></p>
                                    <p dir="ltr"><span>If the overwrite everything copying mode is selected then it will first remove all the storyboarded samples of the map you are copying to and then copy.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Checking the box of "Ignore hitsound satisfied samples" will make the program try to not copy over storyboarded samples for samples that already get played by the hitsounds.</span></p>
                                    <p dir="ltr"><span>Temporal leniency also applies here.</span></p>
                                    <p dir="ltr"><span>If a hitsound plays sample X at time Y then the storyboarded sample of X at time Y +/- temporal leniency will not get copied over.</span></p>
                                    <p dir="ltr"><span>The algorithm also looks for files that have different names/locations but have the same sound, so you don't have to worry about your storyboarded samples using different files.</span></p>
                                    <p dir="ltr"><span>However the algorithm can't detect if there are samples made out of multiple sounds mixed together. It will treat those as unique sounds.</span></p>
                                    <h2 id="cl-mutingsliderends" dir="ltr"><span>Muting Sliderends</span></h2>
                                    <p dir="ltr"><span>You can enable sliderend muting in Hitsound Copier by checking the mute sliderends checkbox. Despite the name this muting also applies to spinnerends.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Only sliderends that are not defined will be eligible to get muted. If you want to ignore that filter you can just copy from an empty map with the overwrite only defined hitsounds option.</span></p>
                                    <p dir="ltr"><span>Sliderends from repeating sliders won&rsquo;t get muted.</span></p>
                                    <p dir="ltr"><span>You can configure the minimum snap that the sliderend must have to be eligible to get muted.</span></p>
                                    <p dir="ltr"><span>You can also configure the minimum length the slider must have to be eligible to get sliderend muting. The time you input is in number of beats. If the textbox for the minimum length can&rsquo;t be parsed then it will default to 0.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>You can configure how the program mutes sliderends. Under muted config the textbox is to configure what customindex gets given to muted sliderends. If the textbox can&rsquo;t be parsed then it will not change the custom index on the sliderend. You can also tell the program what sampleset the muted sliderend must be.</span></p>
                                    <p dir="ltr"><span>In addition to the stuff you configured, all muted sliderends will have 5% volume, auto for additions and no hitsounds.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#studio">
                                    <h1 id="cl-hitsoundstudio" dir="ltr"><span>Hitsound Studio</span></h1>
                                    <p dir="ltr"><span>Hitsound Studio is the tool that lets you import data from multiple outside sources and convert them to osu! standard hitsounds in the form of a hitsounding difficulty that can you copy to other beatmaps.</span></p>
                                    <p dir="ltr"><span>It represents hitsounds as a list of layers (hitsound layers). One layer contains a unique sound, the sampleset and hitsound that accompany that sound and a list of times that sound has to be played.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-managinghitsounds" dir="ltr"><span>Managing hitsounds</span></h2>
                                    <h3 id="cl-addinglayers" dir="ltr"><span>Adding layers</span></h3>
                                    <p dir="ltr"><span>When you click the plus button underneath the list there will appear a little window for adding layers. There are different ways to add layers for each import type.</span></p>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Simple layer. You can add a layer which doesn&rsquo;t import times from any outside source if you just want to input the times via the gui.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Import stack. You can import the times from a beatmap. This import type will look at one specific coordinate, column or row of a beatmap and get the times of all the objects on there for your hitsound layer. That way you can use the osu! editor to make the times in your hitsound layers.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Import hitsounds. You can import the complete hitsounding of a beatmap. This import type will look at every sample that plays on every object and generate multiple hitsound layers that would recreate the same hitsounds. This ignores slidertick and sliderslide hitsounds. When you import hitsounds with this mode it will also look for duplicate custom samples in the beatmap&rsquo;s folder to avoid hitsound layers that have the same sound, sampleset and hitsound, but a different sound file. However it can&rsquo;t detect samples that are made out of multiple other samples combined.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Import MIDI. You can import MIDI&rsquo;s for hitsounds. This import type will generate a layer for every unique sound the MIDI wants to play. It will also automatically fill in the arguments for SoundFonts.</span></p>
                                        </li>
                                    </ul>
                                    <p dir="ltr"><span>It will automatically fill in the current beatmap for beatmap fields in the importing window.</span></p>
                                    <h3 id="cl-editinglayers" dir="ltr"><span>Editing layers</span></h3>
                                    <p dir="ltr"><span>Taking up most of the screen is a list that shows all the hitsound layers. You can select one or more layers and edit their properties in the panel to the left.</span></p>
                                    <p dir="ltr"><span>Double clicking a hitsound layer will make it play it&rsquo;s sample, so you can check what it sounds like. If it doesn&rsquo;t play a sound then it probably couldn&rsquo;t find the sample.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>In the editing panel you can edit the following properties:</span></p>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Name. It has no other use than letting yourself know what each layer is supposed to represent.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Sample set. It defines which sample set will be used for the sample of the layer.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Hitsound. It defines which hitsound will be used for the sample of the layer.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Times. This is the list of times in milliseconds separated by commas which defines when the sample will be played. You can edit this in the tool, but it&rsquo;s recommended to make all edits in the source of the layer and reloading the layer instead of editing the layer itself.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Hitsound sample. A path to a file that contains the custom sound the hitsound must make. Supported file types are wave, vorbis and SoundFont. If you input a path to a SoundFont file there will appear extra inputs for generating sounds from a SoundFont. If Hitsound Studio can&rsquo;t load the sample it will instead treat it like you want it to play the skin&rsquo;s default sample, so no custom sound.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Import info. This holds information that define what this layer is compared to the source of the layer, so you can reload the data from the source to the times of the layer. It&rsquo;s like the layer&rsquo;s identity for outside sources.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Reload from source will re-do importing for all the selected layers and replace their times property will new values. This is based of of their import info.</span></p>
                                        </li>
                                    </ul>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>You can use the up/down buttons underneath the list to move the selected layers up/down and this actually serves an extra purpose.</span></p>
                                    <p dir="ltr"><span>Hitsound Studio treats the list as a hierarchy so the top layers have the most priority and the bottom layers have the lowest priority. In case multiple hitsounds mix at the same time it will take the sampleset of the layer with the highest priority.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>If you press the garbage can button underneath the list it will ask you to confirm deletion and if you press yes it will remove the selected layers.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h3 id="cl-usingsoundsfromsoundfont" dir="ltr"><span>Using sounds from SoundFont</span></h3>
                                    <p dir="ltr"><span>Inputting a path to a SoundFont file (.sf2) in the path for the hitsound sample will make extra controls appear which allow you to generate the right sound out of the SoundFont. You cannot use SoundFont for the default sample.</span></p>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Bank. This is the bank number to the bank to use. Usually bank 0 contains all the instruments and bank 128 contains all the percussion.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Patch. This defines which patch to use. Patches are like different instruments. Here&rsquo;s a helpful link that tells you the patch numbers corresponding to instruments: </span><a href="https://pjb.com.au/muscript/gm.html"><span>https://pjb.com.au/muscript/gm.html</span></a><span>.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Instrument. Sometimes a patch contains multiple instruments, so you can use this to give an index of which part of a patch to use.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Key. This defines the key or pitch of the instrument. For the percussion bank this can also define which instrument to use instead of pitch. Hitsound Studio can pitch shift if the SoundFont doesn&rsquo;t contain the exact right key. Here&rsquo;s a helpful link if you don&rsquo;t that tells you how key number translates to other stuff </span><a href="https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies"><span>https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies</span></a><span>.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Length. This defines the length in milliseconds to play a sample. If you input -1 here it will instead get the full length of the sound.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Velocity. This is a value from 0 to 128 that defines how loud to generate a sound. SoundFont can have different samples for different velocities. Hitsound Studio will adjust volume for the velocity value. Inputting -1 will act like 128 velocity or 100% volume.</span></p>
                                        </li>
                                    </ul>
                                    <p dir="ltr"><span>Inputting -1 for bank, patch, instrument or key will make it look through every entry until it finds the first suitable sample, so that&rsquo;s your best bet if you don&rsquo;t know which bank or patch etc to use.</span></p>
                                    <p dir="ltr"><span>Also remember you can double click the layer to hear what sound it makes.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Hitsound Studio adds a small fadeout extension to the sounds to make the ending sound natural. If you input -1 into the length field it will not extend the length but still keep the small fadeout.</span></p>
                                    <p dir="ltr"><span>Times are in seconds. It will extend by 0.4 seconds if the length is not defined as -1 and then do the following fade:</span></p>
                                    <p dir="ltr"><span>If the length of the sample is less than 0.4 seconds:</span></p>
                                    <p dir="ltr"><span>Fade start = length * 0.7;</span></p>
                                    <p dir="ltr"><span>Fade length = length * 0.2;</span></p>
                                    <p dir="ltr"><span>else:</span></p>
                                    <p dir="ltr"><span>Fade start = length - 0.4;</span></p>
                                    <p dir="ltr"><span>Fade length = 0.3;</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h3 id="cl-basebeatmap" dir="ltr"><span>Base beatmap</span></h3>
                                    <p dir="ltr"><span>The base beatmap is a beatmap that contains all the timing, metadata and volume changes for the hitsounding difficulty. Basically the hitsounding difficulty will be exactly this map but with all objects and custom indices replaced. Also mode will be set to osu! standard, circle size will be set to 4 and the difficulty will be called &ldquo;Hitsounds&rdquo;.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h3 id="cl-defaultsample" dir="ltr"><span>Default sample</span></h3>
                                    <p dir="ltr"><span>You tell Hitsound Studio what sample and sample set to use for undefined hitnormals.</span></p>
                                    <p dir="ltr"><span>Default sample is required because in osu! standard an object will always play a hitnormal sample. For example if you told Hitsound Studio you want a whistle at 10s with a certain sound without telling it what hitnormal to play at 10s, then Hitsound Studio doesn&rsquo;t know what sample to play for the hitnormal at 10s. The default sample will fill that place.&nbsp;</span></p>
                                    <p dir="ltr"><span>If Hitsound Studio can&rsquo;t load the sample it will instead treat it like you want it to play the skin&rsquo;s default sample, so no custom sound.</span></p>
                                    <p><span><span><br /><br /></span></span></p>
                                    <h2 id="cl-exportinghitsounds" dir="ltr"><span>Exporting hitsounds</span></h2>
                                    <p dir="ltr"><span>Press the play button to run the algorithm and export the files to the exports folder. When it&rsquo;s done it will open the export folder filled with all the files.</span></p>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>&nbsp;One hitsounds beatmap that contains all the data of hitsounding and that you can copy from.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>A bunch of wav files that is all the necessary custom samples to properly play the hitsounds in the hitsounds beatmap. These wav files are encoded with 16-bit PCM.</span></p>
                                        </li>
                                    </ul>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>The algorithm takes the hitsound layers, base beatmap and default sample and converts them to osu! standard hitsounds. It uses advanced algorithms to generate the optimal custom indices that require the least amount of samples. It also optimises to use the least amount of greenlines.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Press the question mark button to run the algorithm without exporting any files and just display the number of custom indices, samples and greenlines it would have.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h3 id="cl-mixingsamples" dir="ltr"><span>Mixing samples</span></h3>
                                    <p dir="ltr"><span>To make osu! standard hitsounds it sometimes has to mix multiple samples together into one sample.</span></p>
                                    <p dir="ltr"><span>To prevent clipping of audio it scales volume with the following formula:</span></p>
                                    <p dir="ltr"><span>Volume = 1 / Sqrt(number of samples * average volume)</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Volume is a scale 0 to 1 and number of sounds is the number of samples that get mixed into one sample.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>The resulting sample will get the sample rate of the highest sample rate sample out of the samples that make it up.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>The resulting sample will be stereo if at least one of the samples that make it up is stereo.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-savingprojects" dir="ltr"><span>Saving projects</span></h2>
                                    <p dir="ltr"><span>You can save and load your configuration by using the project menu in the top bar and it will also automatically save your current configuration for when you close Mapping Tools. That way you don't lose your work and it enables you to work on multiple hitsound projects at the same time.</span></p>
                                    <p><span><span><br /><br /></span></span></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#preview">
                                    <h1 id="cl-hitsoundpreviewhelper" dir="ltr"><span>Hitsound Preview Helper</span></h1>
                                    <p dir="ltr"><span>Hitsound Preview Helper helps by placing hitsounds on all the objects of the current map based on the positions of the objects. That way you can hear the hitsounds play while you hitsound without having to assign them manually and later import them to Hitsound Studio.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>This tool is meant to help a very specific hitsounding workflow. If you hitsound by placing circles on different parts on the screen and treat each position as a different layer of hitsounds. For example using a mania map and have each column represent a different sound.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>You define a list of positions and their hitsounds (hitsound zones) using the tool's GUI.</span></p>
                                    <p dir="ltr"><span>For each object the tool finds the nearest hitsound zone and applies the hitsounds from that hitsound zone to the object.</span></p>
                                    <p dir="ltr"><span>Inputting -1 for a coordinate of the hitsound zone will make it act like that coordinate could be any value. For example -1 in the X coordinate will make it effectively a horizontal line and each object will calculate the distance from it using only the Y coordinate.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <h2 id="cl-savingprojects2" dir="ltr"><span>Saving projects</span></h2>
                                    <p dir="ltr"><span>You can save and load your configuration of hitsound zones and it will also automatically save your current configuration for when you close Mapping Tools. That way you don't lose your possibly large configurations and it enables you to work on multiple hitsound projects at the same time.</span></p>
                                    <p dir="ltr"><span></span></p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#tutorials">
                                    <h1 id="cl-tutorials" dir="ltr"><span>Tutorials</span></h1>
                                    <h2 id="cl-resnappingeverythingwithmapcleaner" dir="ltr"><span>Resnapping everything with Map Cleaner</span></h2>
                                    <p dir="ltr"><span>1.</span></p>
                                    <p dir="ltr"><span>Select your map with by either using &lsquo;Open beatmap&rsquo; to open a file dialog or &lsquo;Open current beatmap&rsquo; to get the current map from your osu! client.</span></p>
                                    <p dir="ltr"><span><img src={p_current} alt="Current beatmap" width="201" height="98" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>2.</span></p>
                                    <p dir="ltr"><span>Check the checkbox for &lsquo;Resnap objects&rsquo;.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>3.</span></p>
                                    <p dir="ltr"><span>Tell the tool what kind of greenline usage your map has and to which snap divisors objects are snapped.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>For example &lsquo;Map uses volume changes in sliders&rsquo; means that you have greenlines in the sliderbodies of sliders in your map which are supposed to change the volume. This is only about the sliderbody and not the sliderhead, repeat or end.</span></p>
                                    <p dir="ltr"><span>Unchecking this will make Map Cleaner remove all volume changes inside sliderbodies, but still keep volume changes for sliderends etc.</span></p>
                                    <p dir="ltr"><span>The same logic applies for the other two checkboxes.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>You can configure two snap divisors for the resnapping. One is for &frac12; &frac14; etc and the other is for ⅓ ⅙ etc. So if your map has objects snapped to both &frac14; and ⅓ you can configure that here.</span></p>
                                    <p dir="ltr"><span>It is advised to keep the snap divisors as small as possible to prevent it from snapping small unsnaps to 1/16 and making hard to notice problems.</span></p>
                                    <p dir="ltr"><span><img src={p_cleaner} alt="map cleaner" width="319" height="191" /></span></p>
                                    <p><span><span><br /><br /></span></span></p>
                                    <p dir="ltr"><span>4.</span></p>
                                    <p dir="ltr"><span>Click the play button to run the tool. A timeline will appear that shows all changes in the timingpoints of the map. A green line is an added timingpoint, a red line is a removed timingpoint and an orange line is a changed timingpoint. You can double click any of the lines to bring you to that spot in the editor. This timeline is only there to debug any unexpected changes.</span></p>
                                    <p dir="ltr"><span>Now your map should be perfectly cleaned and snapped. If something went horribly wrong you can always revert to your backup which was automatically saved in the backups folder.</span></p>
                                    <p><span><span><br /><br /></span></span></p>
                                    <h2 id="cl-changingbpmandoffsetusingpropertytransformer" dir="ltr"><span>Changing BPM and offset using Property Transformer</span></h2>
                                    <p dir="ltr"><span>Say you want to change BPM and offset of a timing section while also moving all the objects and greenlines to the new timing. Manually shifting all the hitobjects and timingpoints into the right BPM and offset takes way to long, so Property Transformer makes this much easier.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>1.</span></p>
                                    <p dir="ltr"><span>Make note of the situation. For this example I&rsquo;ll go from timing A with offset 15000 and 180 BPM and change it to timing B with offset 25000 and 200 BPM.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>2.</span></p>
                                    <p dir="ltr"><span>Make a backup of timing A. You can either have it uploaded or make a backup using Mapping Tools by setting your map as current beatmap and using &lsquo;Generate backup&rsquo;.</span></p>
                                    <p dir="ltr"><span><img src={p_backup} alt="make backup" width="208" height="169" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>3.</span></p>
                                    <p dir="ltr"><span>Now grab a calculator. You need to calculate the correct multiplier and offset for the objects in the map.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Multiplier = BPM</span><span>A</span><span> / BPM</span><span>B</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Offset = Offset</span><span>B</span><span> - Offset</span><span>A</span><span> * BPM</span><span>A</span><span> / BPM</span><span>B</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Because the multiplier goes before the offset (Offset</span><span>A</span><span> * BPM</span><span>A</span><span> / BPM</span><span>B</span><span>) is Offset</span><span>A</span><span> after multiplying, then you simply subtract that from Offset</span><span>B</span><span> to get the offset.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>So for my example the multiplier is: 180 / 200 = 0.9.</span></p>
                                    <p dir="ltr"><span>And the offset is: 25000 - 15000 * 180 / 200 = 11500.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>You can also change the BPM for the redlines.</span></p>
                                    <p dir="ltr"><span>BPM Multiplier = BPM</span><span>B</span><span> / BPM</span><span>A</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>4.</span></p>
                                    <p dir="ltr"><span>Input the calculated multiplier and offset for timingpoint offset, hitobject time and bookmark time.</span></p>
                                    <p dir="ltr"><span>You can also directly write the formulas in the textboxes and the result will automatically get calculated, so you don&rsquo;t need a calculator.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>In case your map uses multiple redlines and you want to only move objects in the one redline that you&rsquo;re changing, use the time filter to only affect the range of the redline you&rsquo;re changing.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span><img src={p_transformer} alt="property transform" width="602" height="435" /></span></p>
                                    <p><span><span><br /><br /><br /></span></span></p>
                                    <p dir="ltr"><span>5.</span></p>
                                    <p dir="ltr"><span>Make sure your beatmap is the current map and run the tool by clicking the play button.</span></p>
                                    <p><span><span><br /><br /><br /><br /><br /></span></span></p>
                                    <h2 id="cl-merginslidersusingslidermerger" dir="ltr"><span>Merging sliders using Slider Merger</span></h2>
                                    <p dir="ltr"><span>1.</span></p>
                                    <p dir="ltr"><span>Have sliders you want to merge into one slider. The last anchor of each slider is on the head of the next slider.</span></p>
                                    <p dir="ltr"><span><img src={p_merger1} alt="merging 1" width="322" height="373" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>2.</span></p>
                                    <p dir="ltr"><span>Place bookmarks on the timeline that overlap with all the sliders you want to merge. Don&rsquo;t worry if other objects have bookmarks on them as well, because they probably won&rsquo;t merge, because their last anchor probably doesn&rsquo;t sit on another sliderhead.</span></p>
                                    <p dir="ltr"><span><img src={p_merger2} alt="merging 2" width="602" height="91" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>3.</span></p>
                                    <p dir="ltr"><span>Save your map with ctrl+S and keep the editor open.</span></p>
                                    <p><span><span><br /><br /></span></span></p>
                                    <p dir="ltr"><span>4.</span></p>
                                    <p dir="ltr"><span>Set your beatmap as the current map and run Slider Merger by clicking the play button. Make sure it merged the correct number of sliders. If not, you can ctrl+S in the editor again to undo the merge and look for the problem.</span></p>
                                    <p dir="ltr"><span><img src={p_merger3} alt="merging 3" width="196" height="133" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>5.</span></p>
                                    <p dir="ltr"><span>Use ctrl+L to reload your beatmap and examine your beautiful slider.</span></p>
                                    <p dir="ltr"><span><img src={p_merger4} alt="merging 4" width="314" height="401" /></span></p>
                                    <p><span><span><br /><br /><br /><br /><br /><br /><br /></span></span></p>
                                    <h2 id="cl-completingsliderswithslidercompletionator" dir="ltr"><span>Completing sliders with Slider Completionator</span></h2>
                                    <p dir="ltr"><span>1.</span></p>
                                    <p dir="ltr"><span>You want to create some kind of square ⅛ slider stream with all sliders ending on the same spot, but you require some really precise SV to get them to end exactly on the spot your want and be ⅛ at the same time.</span></p>
                                    <p dir="ltr"><span><img src={p_compl1} alt="complete 1" width="602" height="567" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>2.</span></p>
                                    <p dir="ltr"><span>Remove all bookmarks and put a bookmark on every slider in your pattern. You want there to only be bookmarks on the sliders you want to edit.</span></p>
                                    <p dir="ltr"><span><img src={p_compl2} alt="complete 2" width="602" height="55" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>3.</span></p>
                                    <p dir="ltr"><span>Save your beatmap with ctrl+S and keep the editor open.</span></p>
                                    <p><span><span><br /><br /><br /></span></span></p>
                                    <p dir="ltr"><span>3.</span></p>
                                    <p dir="ltr"><span>Input ⅛ for the temporal length of the slider and 1 for the spatial length of the slider. 1 means it goes 1x the full path defined by the anchors, so it ends exactly on the last anchor.</span></p>
                                    <p dir="ltr"><span><img src={p_compl3} alt="complete 3" width="287" height="172" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>4.</span></p>
                                    <p dir="ltr"><span>Set your beatmap as the current map and run Slider Completionator by clicking the play button. Check if it edited the right amount of sliders.</span></p>
                                    <p dir="ltr"><span><img src={p_compl4} alt="complete 4" width="217" height="133" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>5.</span></p>
                                    <p dir="ltr"><span>Use ctrl+L to reload your beatmap and examine your beautiful pattern.</span></p>
                                    <p dir="ltr"><span><img src={p_compl5} alt="complete 5" width="602" height="477" /></span></p>
                                    <p><span><span><br /><br /></span></span></p>
                                    <h2 id="cl-fixinganoffbeattimingwithtiminghelper" dir="ltr"><span>Fixing an off-beat timing with Timing Helper</span></h2>
                                    <p dir="ltr"><span>1.</span></p>
                                    <p dir="ltr"><span>You are timing a map but suddenly you find just one snare that is 30 milliseconds earlier than expected. All the other sounds are perfectly on-beat.</span></p>
                                    <p dir="ltr"><span><img src={p_timing1} alt="timing 1" width="602" height="89" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>2.</span></p>
                                    <p dir="ltr"><span>Place greenlines or bookmarks on the sounds surrounding the off-beat sound and a greenline exactly on the time where you think the off-beat sound starts.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>3.</span></p>
                                    <p dir="ltr"><span>Save the beatmap with ctrl+S</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>4.</span></p>
                                    <p dir="ltr"><span>Make sure &lsquo;Cover bookmarks&rsquo; and &lsquo;Cover greenlines&rsquo; and &lsquo;Cover redlines&rsquo; are checked. Input a time in milliseconds for the &lsquo;Leniency&rsquo; field that&rsquo;s around your margin of error for how precise your timing is. Leave &lsquo;Beats between every marker&rsquo; empty. Change signatures to the snap divisors your timing uses. You don&rsquo;t want it to falsely snap the off-beat sound to 1/16.</span></p>
                                    <p dir="ltr"><span><img src={p_timing2} alt="timing 2" width="602" height="439" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>5.</span></p>
                                    <p dir="ltr"><span>Set your beatmap as the current map and run the tool by clicking the play button.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>6.</span></p>
                                    <p dir="ltr"><span>Reload your map with ctrl+L and enjoy proper timing.</span></p>
                                    <p dir="ltr"><span><img src={p_timing3} alt="timing 3" width="602" height="317" /></span></p>
                                    <p><span><span><br /><br /></span></span></p>
                                    <h2 id="cl-copyinghitsoundswithhitsoundcopier" dir="ltr"><span>Copying hitsounds with Hitsound Copier</span></h2>
                                    <p dir="ltr"><span>1.</span></p>
                                    <p dir="ltr"><span>In the map you&rsquo;re going to copy to, remove all hitsounds, reset all samplesets, custom indices and volumes. Give everything a basic sound that&rsquo;s audible and good for your overmapped &frac12; sliderends.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>2.</span></p>
                                    <p dir="ltr"><span>Open Hitsound Copier and load it with all your settings. Use the documentation to find out what everything does.</span></p>
                                    <p dir="ltr"><span><img src={p_copier1} alt="copier 1" width="602" height="475" /></span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>3.</span></p>
                                    <p dir="ltr"><span>Run Hitsound Copier by clicking the play button.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>4.</span></p>
                                    <p dir="ltr"><span>Rank your mapset.</span></p>
                                    <p><span><span><br /><br /><br /></span></span></p>
                                    <h2 id="cl-makingtraditionalhitsoundsusinghitsoundstudioandhitsoundpreviewhelper" dir="ltr"><span>Making traditional hitsounds using Hitsound Studio and Hitsound Preview Helper</span></h2>
                                    <p dir="ltr"><span>1.</span></p>
                                    <p dir="ltr"><span>Find the folder of your mapset and make a copy of the folder and put it in the Songs folder and add hitsounds to the name or something. You're going to make the hitsounds in a folder separate from your mapset, because they are going to have different custom samples.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>2.</span></p>
                                    <p dir="ltr"><span>In the copied folder remove all difficulties except one and open that map in a text editor.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>3.</span></p>
                                    <p dir="ltr"><span>Change the Version property to something like "Hitsound Layers" but not "Hitsounds".</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>4.</span></p>
                                    <p dir="ltr"><span>F5 in osu should now show the new map and the new map is separated from your mapset.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>5.</span></p>
                                    <p dir="ltr"><span>Change the new map to the mania minigame and in the difficulty tab change keys to 9K co-op, so in total you have 18 layers to work with.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>You can also keep it osu! standard for more possible layers but then its harder to visualize hitsounds and to put multiple notes at the same time.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>6.</span></p>
                                    <p dir="ltr"><span>Now you can begin defining your layers. Think of what samples you want to use and in which columns you want to place them. You can start with your basic kick, snare, high-hat and finish and add more as you go on. Changing the samples later on is also really easy.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Put your samples in the folder of your hitsound layers beatmap.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>7.</span></p>
                                    <p dir="ltr"><span>Open Hitsound Preview Helper and add your layer definitions.&nbsp;</span></p>
                                    <p dir="ltr"><span>For each layer you need to give it a name, filename, coordinates, sampleset and hitsound. For example: "kick", "kick sound.wav", 14, -1, Drum, Normal.</span></p>
                                    <p dir="ltr"><span>You need to put in the X coordinate of your mania column and -1 for Y because that doesn't matter. You can find out the X coordinate of a column by placing a note in there and checking the X coordinate in the .osu. You can also use this formula: X = 512 / number of keys / 2 + 512 / number of keys &times; index of the key.</span></p>
                                    <p dir="ltr"><span>In this case number of keys is 18 and the index of the key goes from 0 to 17.</span></p>
                                    <p dir="ltr"><span>The X coordinate doesn't have to be exactly right as long as it's closer to the correct column than the other columns.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>8.</span></p>
                                    <p dir="ltr"><span>Place notes in your map to make hitsounds. Every kick in the kick column, every snare in the snare column etc.</span></p>
                                    <p dir="ltr"><span>To listen back to your hitsounds first save the map (ctrl+S) and run Hitsound Preview Helper on your map, then reload with ctrl+L.</span></p>
                                    <p dir="ltr"><span>Hitsound Preview Helper puts all the filenames on the notes based on which column they're in.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Add more layers while you compose the hitsounds to keep it interesting. The best hitsounds use as many different samples as possible in any given part of the song. That way it doesn&rsquo;t sound repetitive.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>9.</span></p>
                                    <p dir="ltr"><span>Once you're done composing your hitsound you can open Hitsound Studio to convert your layers into actual functioning osu! standard hitsounds.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>Run Hitsound Preview Helper one more time to make sure you didn't forget to give hitsounds to the last notes.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>10.</span></p>
                                    <p dir="ltr"><span>In Hitsound Studio click the plus button to summon the importing window. Go to the 'Import hitsounds' tab, put the path to your hitsounds layers map in there and click accept.</span></p>
                                    <p dir="ltr"><span>Now there should be a layer for every layer you used in your map.</span></p>
                                    <p dir="ltr"><span>You can add hitsounds from as many beatmap you want, so you can repeat steps 3 to 10 again with extra difficulties if you need more than 18 layers.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>11.</span></p>
                                    <p dir="ltr"><span>Run Hitsound Studio to convert the hitsounds.</span></p>
                                    <p><span><span>&nbsp;</span></span></p>
                                    <p dir="ltr"><span>12.</span></p>
                                    <p dir="ltr"><span>Copy all the files from the exports folder into your mapset. Now you have a hitsounds difficulty.</span></p>
                                    <p><span><span><br /><br /><br /></span></span></p>
                                    <h2 id="cl-addingkeysoundsfromamiditoyourbeatmapwithhitsoundstudioandpropertytransformer" dir="ltr"><span>Adding keysounds from a MIDI to your beatmap with Hitsound Studio and Property Transformer</span></h2>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container >
            </div >
        );
    }
}

export default Documentation;