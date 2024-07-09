import Project from "../Project/Project";
import { projectList } from "../Project/ProjectList";
export default function Projects() {
    return (
        <div>
            <div className="titleContainer">
                <div className="titleHeader">
                    <h1 className="name">Projects</h1>
                </div>
            </div>
            {projectList.map((project, i) => (
                <Project key={i} {...project} />
            ))}
        </div>
    );
}
