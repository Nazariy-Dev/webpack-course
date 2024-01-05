import { run } from "./app/app";
import "./main.scss"
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/components.servise";
const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService)
console.log("jello")