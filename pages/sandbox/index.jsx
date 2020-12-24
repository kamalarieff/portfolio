import React, { useState } from "react";
import PropTypes from "prop-types";
import { Folder, File } from "phosphor-react";
import { motion } from "framer-motion";

const TreeComponent = ({ children }) => (
  <div className="leading-4">{children}</div>
);

TreeComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const FileComponent = ({ name }) => (
  <div className="pl-4 flex items-center">
    <File size={24} />
    <span className="ml-1">{name}</span>
  </div>
);

FileComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

const FolderComponent = ({ name, children }) => (
  <div className="pl-4">
    <div className="flex items-center">
      <Folder size={24} />
      <span className="ml-1">{name}</span>
    </div>
    <div>{children}</div>
  </div>
);

FolderComponent.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Tree = TreeComponent;
Tree.Folder = FolderComponent;
Tree.File = FileComponent;

const Button = ({ onClick, children }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="text-sm p-2 bg-blue-400 rounded"
  >
    {children}
  </motion.button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const SandboxPage = () => {
  const [position, setPosition] = useState("start");

  const startAnimation = () => setPosition("end");
  const restartAnimation = () => setPosition("start");

  const variants = {
    start: {
      x: 0,
      y: 0,
      color: "initial",
    },
    end: {
      x: -225,
      y: -24,
      color: "#4299e1",
    },
  };

  return (
    <div className="m-20">
      <div className="flex space-x-4">
        <Button onClick={startAnimation}>Start</Button>
        <Button onClick={restartAnimation}>Restart</Button>
      </div>
      <div className="flex space-x-8">
        <div>
          <h1 className="text-4xl">Tree</h1>
          <Tree>
            <Tree.Folder name="/">
              <Tree.Folder name="home">
                <Tree.Folder name="kamalarieff" />
              </Tree.Folder>
            </Tree.Folder>
          </Tree>
        </div>
        <div>
          <h1 className="text-4xl">Tree</h1>
          <Tree>
            <Tree.Folder name="/">
              <Tree.Folder name="home">
                <Tree.Folder name="kamalarieff">
                  <Tree.Folder name="dotfiles">
                    <motion.div
                      animate={position}
                      variants={variants}
                      transition={{
                        ease: "easeInOut",
                        color: {
                          ease: "easeInOut",
                          delay: 0.8,
                        },
                      }}
                    >
                      <Tree.Folder name=".config">
                        <Tree.Folder name="bspwm">
                          <Tree.File name="bspwmrc" />
                        </Tree.Folder>
                        <Tree.Folder name="sxhkd">
                          <Tree.File name="sxhkdrc" />
                        </Tree.Folder>
                        <Tree.Folder name="polybar">
                          <Tree.File name="config" />
                        </Tree.Folder>
                      </Tree.Folder>
                      <Tree.File name=".bash_profile" />
                      <Tree.File name=".zshrc" />
                    </motion.div>
                  </Tree.Folder>
                </Tree.Folder>
              </Tree.Folder>
            </Tree.Folder>
          </Tree>
        </div>
      </div>
    </div>
  );
};

export default SandboxPage;
