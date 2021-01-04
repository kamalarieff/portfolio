import React, { useState } from "react";
import PropTypes from "prop-types";
import { Folder, File } from "phosphor-react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const TreeComponent = ({ children }) => (
  <div className="leading-4">{children}</div>
);

TreeComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const FileComponent = ({ name, symlink }) => (
  <div className="pl-4 flex items-center space-x-1">
    <File size={24} />
    <span>{name}</span>
    {symlink && (
      <motion.span
        className="text-blue-400 font-mono mt-1 text-sm md:text-base flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        symlink<span className="hidden md:block"> -> {symlink}</span>
      </motion.span>
    )}
  </div>
);

FileComponent.propTypes = {
  name: PropTypes.string.isRequired,
  symlink: PropTypes.string,
};

const FolderComponent = ({ name, children, symlink }) => (
  <div className="pl-4">
    <div className="flex items-center space-x-1">
      <Folder size={24} />
      <span>{name}</span>
      {symlink && (
        <motion.span
          className="text-blue-400 font-mono mt-1 text-sm md:text-base flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          symlink<span className="hidden md:block"> -> {symlink}</span>
        </motion.span>
      )}
    </div>
    <div>{children}</div>
  </div>
);

FolderComponent.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  symlink: PropTypes.string,
};

const Tree = TreeComponent;
Tree.Folder = FolderComponent;
Tree.File = FileComponent;

const Ping = () => (
  <span className="flex absolute">
    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500 -mt-3 ml-20"></span>
    <span className="animate-ping inline-flex rounded-full h-3 w-3 bg-pink-500 -mt-3 -ml-3"></span>
  </span>
);

const Button = ({ onClick, children }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="text-sm p-2 bg-blue-400 w-24 rounded"
  >
    <Ping />
    {children}
  </motion.button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const StowDemo = () => {
  const [position, setPosition] = useState("start");

  const startAnimation = () => setPosition("end");
  const restartAnimation = () => setPosition("start");

  return (
    <div className="w-full">
      <Button
        onClick={position === "start" ? startAnimation : restartAnimation}
      >
        {position === "start" ? "Stow" : "Unstow"}
      </Button>
      <div className="mt-4">
        <span className="text-4xl font-bold">Tree</span>
        <Tree>
          <Tree.Folder name="/">
            <Tree.Folder name="home">
              <Tree.Folder name="kamalarieff">
                <AnimateSharedLayout>
                  {/* Symlinked files start */}
                  <AnimatePresence>
                    {position === "end" && (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Tree.Folder name=".config">
                          <Tree.Folder name="bspwm" symlink="../dotfiles/bspwm">
                            <Tree.File name="bspwmrc" />
                          </Tree.Folder>
                          <Tree.Folder name="sxhkd" symlink="../dotfiles/sxhkd">
                            <Tree.File name="sxhkdrc" />
                          </Tree.Folder>
                          <Tree.Folder
                            name="polybar"
                            symlink="../dotfiles/polybar"
                          >
                            <Tree.File name="config" />
                          </Tree.Folder>
                        </Tree.Folder>
                        <Tree.File
                          name=".bash_profile"
                          symlink="dotfiles/.bash_profile"
                        />
                        <Tree.File name=".zshrc" symlink="dotfiles/.zshrc" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {/* Symlinked files end */}
                  <motion.div layout>
                    <Tree.Folder name="dotfiles">
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
                    </Tree.Folder>
                  </motion.div>
                </AnimateSharedLayout>
              </Tree.Folder>
            </Tree.Folder>
          </Tree.Folder>
        </Tree>
      </div>
    </div>
  );
};

export default StowDemo;
